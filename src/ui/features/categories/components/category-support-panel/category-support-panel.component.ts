import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-support-panel',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './category-support-panel.component.html',
  styleUrls: ['./category-support-panel.component.scss']
})
export class CategorySupportPanelComponent {
  @Input() categories: any[] = [];

  get totalCategories(): number {
    return this.categories.length;
  }

  get activeCategories(): number {
    return this.categories.filter(c => c.status === 'Active').length;
  }

  get inactiveCategories(): number {
    return this.categories.filter(c => c.status === 'Inactive').length;
  }

  get totalProducts(): number {
    return this.categories.reduce((acc, c) => acc + c.productsCount, 0);
  }
}
