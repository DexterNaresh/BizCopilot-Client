import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-view-toggle',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './category-view-toggle.component.html',
  styleUrls: ['./category-view-toggle.component.scss']
})
export class CategoryViewToggleComponent {
  @Input() totalCount: number = 0;
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Output() viewModeChange = new EventEmitter<'grid' | 'table'>();

  setViewMode(mode: 'grid' | 'table') {
    if (this.viewMode !== mode) {
      this.viewMode = mode;
      this.viewModeChange.emit(mode);
    }
  }
}
