import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewModel } from '../../ui-models/product-view.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {
  @Input({ required: true }) products: ProductViewModel[] = [];
  @Output() toggleFavourite = new EventEmitter<ProductViewModel>();
  @Output() markAvailability = new EventEmitter<{product: ProductViewModel, availability: 'available' | 'unavailable'}>();
  @Output() edit = new EventEmitter<ProductViewModel>();
  @Output() delete = new EventEmitter<ProductViewModel>();

  onToggleFavourite(product: ProductViewModel) {
    this.toggleFavourite.emit(product);
  }

  onMarkAvailability(event: {product: ProductViewModel, availability: 'available' | 'unavailable'}) {
    this.markAvailability.emit(event);
  }

  onEdit(product: ProductViewModel) {
    this.edit.emit(product);
  }

  onDelete(product: ProductViewModel) {
    this.delete.emit(product);
  }
}
