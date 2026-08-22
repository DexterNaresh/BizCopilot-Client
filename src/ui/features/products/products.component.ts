import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFacade, ProductViewModel } from './state/product.facade';

@Component({ selector: 'app-products', standalone: true, imports: [CommonModule, FormsModule], providers: [ProductFacade], templateUrl: './products.component.html', styleUrls: ['./products.component.scss'], changeDetection: ChangeDetectionStrategy.OnPush })
export class ProductsComponent implements OnInit {
  readonly confirmTarget = signal<ProductViewModel | null>(null);
  readonly filterOpen = signal(false);
  constructor(readonly facade: ProductFacade) {}
  ngOnInit(): void { this.facade.load(); }
  archive(product: ProductViewModel): void { this.confirmTarget.set(product); }
  confirmArchive(): void { const product = this.confirmTarget(); if (product) this.facade.archive(product); this.confirmTarget.set(null); }
  changeScope(scope: 'active' | 'archive'): void { this.facade.setScope(scope); }
  pageNumbers(): number[] { return Array.from({ length: Math.min(3, this.facade.totalPages()) }, (_, index) => index + 1); }
  rangeEnd(): number { return Math.min(this.facade.page() * this.facade.pageSize(), this.facade.filtered().length); }
  unitLabel(product: ProductViewModel): string { return product.unit === 'KG' ? 'Kg' : product.unit === 'LTR' ? 'Ltr' : product.unit === 'METER' ? 'Meter' : ''; }
}
