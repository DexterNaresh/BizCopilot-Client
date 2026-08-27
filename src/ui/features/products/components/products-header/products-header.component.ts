import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']})
export class ProductsHeaderComponent {
  @Output() addProduct = new EventEmitter<void>();

  onAddProduct() {
    this.addProduct.emit();
  }
}
