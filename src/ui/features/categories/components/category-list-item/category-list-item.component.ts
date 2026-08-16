import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryViewModel } from '../../ui-models/category-view.model';
import { CategoryActionsComponent } from '../category-actions/category-actions.component';

@Component({
  selector: 'app-category-list-item',
  standalone: true,
  imports: [CommonModule, CategoryActionsComponent],
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent {
  @Input({ required: true }) category!: CategoryViewModel;

  @Output() edit = new EventEmitter<CategoryViewModel>();
  @Output() delete = new EventEmitter<CategoryViewModel>();

  onEdit(category: CategoryViewModel) {
    this.edit.emit(category);
  }

  onDelete(category: CategoryViewModel) {
    this.delete.emit(category);
  }
}
