import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-categories-header',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './categories-header.component.html',
  styleUrls: ['./categories-header.component.scss']
})
export class CategoriesHeaderComponent {
  @Output() addCategory = new EventEmitter<void>();

  onAddCategory() {
    this.addCategory.emit();
  }
}
