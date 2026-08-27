import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-support-panel',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './product-support-panel.component.html',
  styleUrls: ['./product-support-panel.component.scss']})
export class ProductSupportPanelComponent {
  @Input() products: any[] = [];
  @Output() action = new EventEmitter<string>();

  get totalProducts(): number {
    return this.products.length;
  }

  get availableProducts(): number {
    return this.products.filter(p => p.isAvailable).length;
  }

  get unavailableProducts(): number {
    return this.products.filter(p => !p.isAvailable).length;
  }

  get uniqueCategories(): number {
    const categories = new Set(this.products.map(p => p.category).filter(c => c));
    return categories.size;
  }

  onAction(actionName: string) {
    this.action.emit(actionName);
  }
}
