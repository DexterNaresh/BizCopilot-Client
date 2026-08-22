import { Injectable, computed, inject, signal } from '@angular/core';
import { ProductApplication } from '@runtime/product/application/product.application';
import { ProductInfo } from '@runtime/product/application/dto/product.dto';
import { ISessionService } from '@shared/abstractions/session.service.interface';

export type ProductScope = 'active' | 'archive';
export type ProductViewMode = 'grid' | 'table';

export interface ProductViewModel {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly price: number;
  readonly unit: string | null;
  readonly barcode: string | null;
  readonly image: string | null;
  readonly available: boolean;
  readonly favourite: boolean;
  readonly archived: boolean;
}

@Injectable()
export class ProductFacade {
  private readonly application = inject(ProductApplication);
  private readonly session = inject(ISessionService);
  readonly scope = signal<ProductScope>('active');
  readonly viewMode = signal<ProductViewMode>('grid');
  readonly query = signal('');
  readonly availability = signal<'all' | 'available' | 'unavailable'>('all');
  readonly favouritesOnly = signal(false);
  readonly page = signal(1);
  readonly pageSize = signal(12);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  private readonly source = signal<ProductViewModel[]>([]);

  readonly filtered = computed(() => this.source().filter(product => {
    const query = this.query().trim().toLowerCase();
    const matchesQuery = !query || product.name.toLowerCase().includes(query) || product.barcode?.toLowerCase().includes(query);
    const matchesAvailability = this.availability() === 'all' || (this.availability() === 'available' ? product.available : !product.available);
    return matchesQuery && matchesAvailability && (!this.favouritesOnly() || product.favourite);
  }));
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize())));
  readonly availableCount = computed(() => this.filtered().filter(product => product.available).length);
  readonly unavailableCount = computed(() => this.filtered().filter(product => !product.available).length);
  readonly visible = computed(() => {
    const safePage = Math.min(this.page(), this.totalPages());
    const start = (safePage - 1) * this.pageSize();
    return this.filtered().slice(start, start + this.pageSize());
  });

  load(): void {
    const user = this.session.getCurrentUser();
    if (!user) { this.error.set('Please sign in to view products.'); return; }
    this.loading.set(true); this.error.set(null);
    const result = this.application.listProducts({ userId: user.id, status: this.scope() === 'active' ? 'ACTIVE' : 'ARCHIVED' });
    this.loading.set(false);
    if (!result.success) { this.error.set(result.error.message); return; }
    this.source.set(result.data.map(item => this.map(item)));
    this.correctPage();
  }

  setScope(scope: ProductScope): void { this.scope.set(scope); this.resetPage(); this.load(); }
  setViewMode(mode: ProductViewMode): void { this.viewMode.set(mode); }
  setQuery(query: string): void { this.query.set(query); this.resetPage(); }
  setAvailability(value: 'all' | 'available' | 'unavailable'): void { this.availability.set(value); this.favouritesOnly.set(false); this.resetPage(); }
  setFavourites(): void { this.favouritesOnly.set(true); this.availability.set('all'); this.resetPage(); }
  setPage(page: number): void { this.page.set(Math.min(Math.max(1, page), this.totalPages())); }
  setPageSize(size: number): void { this.pageSize.set(size); this.resetPage(); }

  updateAvailability(product: ProductViewModel): void { this.mutate(product.id, () => this.application.updateAvailability({ userId: this.userId(), product_id: product.id, available: !product.available })); }
  updateFavourite(product: ProductViewModel): void { this.mutate(product.id, () => this.application.updateFavourite({ userId: this.userId(), product_id: product.id, favourite: !product.favourite })); }
  archive(product: ProductViewModel): void { this.mutate(product.id, () => this.application.archiveProduct({ userId: this.userId(), product_id: product.id })); }
  restore(product: ProductViewModel): void { this.mutate(product.id, () => this.application.restoreProduct({ userId: this.userId(), product_id: product.id })); }

  private mutate(id: string, action: () => ReturnType<ProductApplication['archiveProduct']>): void {
    const result = action();
    if (!result.success) { this.error.set(result.error.message); return; }
    if (result.data.product_id === id) this.load();
  }
  private userId(): string { return this.session.getCurrentUser()?.id ?? ''; }
  private resetPage(): void { this.page.set(1); }
  private correctPage(): void { if (this.page() > this.totalPages()) this.page.set(this.totalPages()); }
  private map(item: ProductInfo): ProductViewModel { return { id: item.product_id, name: item.name, category: item.category ?? 'Uncategorized', price: item.price, unit: item.type === 'QTY' || item.type === 'PACK' ? null : item.type, barcode: item.barcode ?? null, image: item.image ?? null, available: item.available === 1, favourite: item.favourite, archived: item.status === 'ARCHIVED' }; }
}
