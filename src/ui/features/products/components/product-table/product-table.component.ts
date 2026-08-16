import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewModel } from '../../ui-models/product-view.model';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {
  @Input({ required: true }) products: ProductViewModel[] = [];
  @Output() toggleFavourite = new EventEmitter<ProductViewModel>();
  @Output() markAvailability = new EventEmitter<{product: ProductViewModel, availability: 'available' | 'unavailable'}>();
  @Output() edit = new EventEmitter<ProductViewModel>();
  @Output() delete = new EventEmitter<ProductViewModel>();

  openMenuId: string | null = null;

  onToggleFavourite(product: ProductViewModel) {
    this.toggleFavourite.emit(product);
  }

  toggleMenu(event: Event, id: string) {
    event.stopPropagation();
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  closeMenu() {
    this.openMenuId = null;
  }

  onEdit(event: Event, product: ProductViewModel) {
    event.stopPropagation();
    this.edit.emit(product);
    this.closeMenu();
  }

  onToggleAvailability(event: Event, product: ProductViewModel) {
    event.stopPropagation();
    const newStatus = product.availability === 'available' ? 'unavailable' : 'available';
    this.markAvailability.emit({ product, availability: newStatus });
    this.closeMenu();
  }

  onDelete(event: Event, product: ProductViewModel) {
    event.stopPropagation();
    this.delete.emit(product);
    this.closeMenu();
  }
}
