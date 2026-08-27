import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() toggleFavourite = new EventEmitter<any>();
  @Output() toggleAvailability = new EventEmitter<any>();

  onEdit() {
    this.edit.emit(this.product);
  }

  onDelete() {
    this.delete.emit(this.product);
  }

  onToggleFavourite() {
    this.toggleFavourite.emit(this.product);
  }

  onToggleAvailability() {
    this.toggleAvailability.emit(this.product);
  }
}
