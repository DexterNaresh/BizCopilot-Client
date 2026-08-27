import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']})
export class ProductTableComponent {
  @Input() products: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() toggleFavourite = new EventEmitter<any>();
  @Output() toggleAvailability = new EventEmitter<any>();

  onEdit(product: any) { this.edit.emit(product); }
  onDelete(product: any) { this.delete.emit(product); }
  onToggleFavourite(product: any) { this.toggleFavourite.emit(product); }
  onToggleAvailability(product: any) { this.toggleAvailability.emit(product); }
}
