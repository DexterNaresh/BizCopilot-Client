import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFilterStatus, ProductViewMode } from '../../models/product.model';

@Component({
  selector: 'biz-product-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFiltersComponent {
  @Input() activeStatusFilter: ProductFilterStatus = 'all';
  @Input() activeViewMode: ProductViewMode = 'grid';
  @Input() searchQuery: string = '';

  @Input() totalProducts: number = 0;
  @Input() availableCount: number = 0;
  @Input() unavailableCount: number = 0;
  @Input() favouriteCount: number = 0;

  @Output() searchChange = new EventEmitter<string>();
  @Output() filterStatusChange = new EventEmitter<ProductFilterStatus>();
  @Output() filterFavouritesToggle = new EventEmitter<void>();
  @Output() viewModeChange = new EventEmitter<ProductViewMode>();

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  setFilterStatus(status: ProductFilterStatus): void {
    this.filterStatusChange.emit(status);
  }

  toggleFavourites(): void {
    this.filterFavouritesToggle.emit();
  }

  setViewMode(mode: ProductViewMode): void {
    this.viewModeChange.emit(mode);
  }
}
