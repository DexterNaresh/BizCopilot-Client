import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-support-panel',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './category-support-panel.component.html',
  styleUrls: ['./category-support-panel.component.scss']
})
export class CategorySupportPanelComponent {

}
