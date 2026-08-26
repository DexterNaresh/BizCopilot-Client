import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'biz-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  @Output() edit = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();
  @Output() toggleAvailability = new EventEmitter<Product>();
  @Output() toggleFavourite = new EventEmitter<Product>();

  get categoryIcon(): string {
    switch (this.product.categoryName) {
      case 'Beverages': return 'local_cafe';
      case 'Desserts': return 'cake';
      default: return 'restaurant';
    }
  }

  get categoryColorClass(): string {
    switch (this.product.categoryName) {
      case 'Beverages': return 'category--beverages';
      case 'Desserts': return 'category--desserts';
      case 'Food': return 'category--food';
      default: return 'category--default';
    }
  }

  onEdit(): void {
    this.edit.emit(this.product);
  }

  onRemove(): void {
    this.remove.emit(this.product);
  }

  onToggleAvailability(): void {
    this.toggleAvailability.emit(this.product);
  }

  onToggleFavourite(): void {
    this.toggleFavourite.emit(this.product);
  }
}
