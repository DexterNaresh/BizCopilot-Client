import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryViewModel } from '../../ui-models/category-view.model';
import { CategoryActionsComponent } from '../category-actions/category-actions.component';
import { CategoryStatusToggleComponent } from '../category-status-toggle/category-status-toggle.component';
import { CategorySortField, SortDirection } from '../../facades/category.facade';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [CommonModule, CategoryActionsComponent, CategoryStatusToggleComponent],
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent {
  @Input({ required: true }) categories: CategoryViewModel[] = [];
  @Input({ required: true }) sortField: CategorySortField = 'createdAt';
  @Input({ required: true }) sortDirection: SortDirection = 'desc';

  @Output() edit = new EventEmitter<CategoryViewModel>();
  @Output() delete = new EventEmitter<CategoryViewModel>();
  @Output() sortChange = new EventEmitter<{ field: CategorySortField, direction: SortDirection }>();
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

  onSort(field: CategorySortField) {
    let newDirection: SortDirection = 'asc';
    if (this.sortField === field && this.sortDirection === 'asc') {
      newDirection = 'desc';
    }
    this.sortChange.emit({ field, direction: newDirection });
  }

  getSortIcon(field: CategorySortField): string {
    if (this.sortField !== field) return 'unfold_more';
    return this.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }
}
