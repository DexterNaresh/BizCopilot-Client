import { Injectable, signal, computed, inject } from '@angular/core';
import { ProductApplication } from '../../../../runtime/product/application/product.application';
import { ISessionService } from '../../../../shared/abstractions/session.service.interface';
import { ProductInfo } from '../../../../runtime/product/application/dto/product.dto';
import { Product, ProductSummary, ProductFilterStatus, ProductViewMode } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {
  private readonly productApp = inject(ProductApplication);
  private readonly sessionService = inject(ISessionService, { optional: true });

  // State Signals
  private readonly _products = signal<Product[]>([
    {
      id: '1', name: 'Cappuccino', categoryId: 'cat-1', categoryName: 'Beverages',
      imageUrl: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=700&q=85',
      price: 120.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '2', name: 'Chocolate Cake', categoryId: 'cat-2', categoryName: 'Desserts',
      imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85',
      price: 80.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '3', name: 'Veg Burger', categoryId: 'cat-3', categoryName: 'Food',
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85',
      price: 90.00, unit: 'qty', available: true, favourite: true, createdAt: new Date().toISOString()
    },
    {
      id: '4', name: 'Fresh Orange Juice', categoryId: 'cat-1', categoryName: 'Beverages',
      imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=85',
      price: 70.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '5', name: 'Cold Coffee', categoryId: 'cat-1', categoryName: 'Beverages',
      imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85',
      price: 110.00, unit: 'qty', available: true, favourite: true, createdAt: new Date().toISOString()
    },
    {
      id: '6', name: 'Club Sandwich', categoryId: 'cat-3', categoryName: 'Food',
      imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85',
      price: 130.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '7', name: 'French Fries', categoryId: 'cat-4', categoryName: 'Sides',
      imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85',
      price: 60.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '8', name: 'Garlic Bread', categoryId: 'cat-4', categoryName: 'Sides',
      imageUrl: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=700&q=85',
      price: 50.00, unit: 'qty', available: false, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '9', name: 'Margherita Pizza', categoryId: 'cat-3', categoryName: 'Food',
      imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85',
      price: 180.00, unit: 'qty', available: true, favourite: true, createdAt: new Date().toISOString()
    },
    {
      id: '10', name: 'Paneer Tikka', categoryId: 'cat-3', categoryName: 'Food',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85',
      price: 150.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '11', name: 'Veg Pasta', categoryId: 'cat-3', categoryName: 'Food',
      imageUrl: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=700&q=85',
      price: 140.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    },
    {
      id: '12', name: 'Lemonade', categoryId: 'cat-1', categoryName: 'Beverages',
      imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=85',
      price: 60.00, unit: 'qty', available: true, favourite: false, createdAt: new Date().toISOString()
    }
  ]);

  private readonly _isLoading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);
  private readonly _searchQuery = signal<string>('');
  private readonly _activeStatusFilter = signal<ProductFilterStatus>('all');
  private readonly _activeViewMode = signal<ProductViewMode>('grid');

  // Public Selectors
  public readonly products = computed(() => this.getFilteredProducts());
  public readonly allProducts = computed(() => this._products());
  public readonly isLoading = computed(() => this._isLoading());
  public readonly error = computed(() => this._error());
  public readonly searchQuery = computed(() => this._searchQuery());
  public readonly activeStatusFilter = computed(() => this._activeStatusFilter());
  public readonly activeViewMode = computed(() => this._activeViewMode());

  public readonly summary = computed<ProductSummary>(() => {
    const list = this._products();
    const categories = new Set(list.map(p => p.categoryName)).size;

    return {
      totalProducts: list.length,
      availableProducts: list.filter(p => p.available).length,
      unavailableProducts: list.filter(p => !p.available).length,
      totalCategories: categories,
      favouriteProducts: list.filter(p => p.favourite).length
    };
  });

  // Actions
  setSearchQuery(query: string): void {
    this._searchQuery.set(query);
  }

  setStatusFilter(status: ProductFilterStatus): void {
    this._activeStatusFilter.set(status);
  }

  setViewMode(mode: ProductViewMode): void {
    this._activeViewMode.set(mode);
  }

  toggleAvailability(product: Product): void {
    const userId = this.getCurrentUserId();
    const newAvailability = !product.available;

    // Call Application Contract
    const response = this.productApp.updateAvailability({
      userId,
      product_id: product.id,
      available: newAvailability
    });

    if (response.success || response.error?.code === 'PRODUCT_NOT_FOUND') {
      // Update local state reactively
      this._products.update(items =>
        items.map(p => p.id === product.id ? { ...p, available: newAvailability } : p)
      );
      this._error.set(null);
    } else {
      this._error.set(response.error?.message || 'Failed to update product availability.');
    }
  }

  toggleFavourite(product: Product): void {
    this._products.update(items =>
      items.map(p => p.id === product.id ? { ...p, favourite: !p.favourite } : p)
    );
  }

  archiveProduct(product: Product): void {
    const userId = this.getCurrentUserId();
    const response = this.productApp.archiveProduct({
      userId,
      product_id: product.id
    });

    if (response.success || response.error?.code === 'PRODUCT_NOT_FOUND') {
      this._products.update(items => items.filter(p => p.id !== product.id));
      this._error.set(null);
    } else {
      this._error.set(response.error?.message || 'Failed to archive product.');
    }
  }

  private getCurrentUserId(): string {
    const user = this.sessionService?.getCurrentUser();
    return user?.id || 'owner-session-id';
  }

  private getFilteredProducts(): Product[] {
    const query = this._searchQuery().toLowerCase().trim();
    const status = this._activeStatusFilter();

    return this._products().filter(product => {
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) || 
        (product.barcode && product.barcode.toLowerCase().includes(query)) ||
        product.categoryName.toLowerCase().includes(query);

      const matchesStatus = status === 'all' ||
        (status === 'available' && product.available) ||
        (status === 'unavailable' && !product.available);

      return matchesSearch && matchesStatus;
    });
  }
}
