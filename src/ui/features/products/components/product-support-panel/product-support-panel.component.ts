import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-support-panel',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './product-support-panel.component.html',
  styleUrls: ['./product-support-panel.component.scss']})
export class ProductSupportPanelComponent {
  onAction(action: string) {
    console.log('Action triggered:', action);
  }
}
