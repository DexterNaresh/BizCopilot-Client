import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewModel } from '../../ui-models/product-view.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductViewModel;
  @Output() toggleFavourite = new EventEmitter<ProductViewModel>();
  @Output() markAvailability = new EventEmitter<{product: ProductViewModel, availability: 'available' | 'unavailable'}>();
  @Output() edit = new EventEmitter<ProductViewModel>();
  @Output() delete = new EventEmitter<ProductViewModel>();

  onToggleFavourite(event: Event) {
    event.stopPropagation();
    this.toggleFavourite.emit(this.product);
  }

  onEdit(event: Event) {
    event.stopPropagation();
    this.edit.emit(this.product);
  }

  onToggleAvailability(event: Event) {
    event.stopPropagation();
    const newStatus = this.product.availability === 'available' ? 'unavailable' : 'available';
    this.markAvailability.emit({ product: this.product, availability: newStatus });
  }

  onDelete(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.product);
  }
}

