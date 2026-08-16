import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryViewModel } from '../../ui-models/category-view.model';

@Component({
  selector: 'app-category-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-actions.component.html',
  styleUrls: ['./category-actions.component.scss']
})
export class CategoryActionsComponent {
  @Input({ required: true }) category!: CategoryViewModel;
  @Output() edit = new EventEmitter<CategoryViewModel>();
  @Output() delete = new EventEmitter<CategoryViewModel>();

  onEdit(event: Event) {
    event.stopPropagation();
    this.edit.emit(this.category);
  }

  onDelete(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.category);
  }
}
