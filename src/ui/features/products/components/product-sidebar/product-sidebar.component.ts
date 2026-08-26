import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSummary } from '../../models/product.model';

@Component({
  selector: 'biz-product-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSidebarComponent {
  @Input() summary: ProductSummary | null = null;
}
