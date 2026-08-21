import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryViewModel } from '../../ui-models/category-view.model';
import { CategoryActionsComponent } from '../category-actions/category-actions.component';
import { CategoryStatusToggleComponent } from '../category-status-toggle/category-status-toggle.component';

@Component({
  selector: 'app-category-list-item',
  standalone: true,
  imports: [CommonModule, CategoryActionsComponent, CategoryStatusToggleComponent],
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent {
  @Input({ required: true }) category!: CategoryViewModel;

  @Output() edit = new EventEmitter<CategoryViewModel>();
  @Output() delete = new EventEmitter<CategoryViewModel>();
  @Output() toggleStatus = new EventEmitter<{ category: CategoryViewModel, status: 'active' | 'inactive' }>();

  onEdit(category: CategoryViewModel) {
    this.edit.emit(category);
  }

  onDelete(category: CategoryViewModel) {
    this.delete.emit(category);
  }

  onToggleStatus(category: CategoryViewModel, status: 'active' | 'inactive') {
    this.toggleStatus.emit({ category, status });
  }
}
