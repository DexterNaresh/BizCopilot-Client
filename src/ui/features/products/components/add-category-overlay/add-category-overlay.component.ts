import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryFacade } from '../../../categories/facades/category.facade';
import { SaveCategoryCommand } from '../../../../../application/contracts/category.application';

@Component({
  selector: 'app-add-category-overlay',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-category-overlay.component.html',
  styleUrls: ['./add-category-overlay.component.scss']
})
export class AddCategoryOverlayComponent {
  @Output() close = new EventEmitter<void>();
  facade = inject(CategoryFacade);

  formData: SaveCategoryCommand = {
    name: '',
    description: '',
    icon: 'category', // Default icon
    status: 'active'
  };

  isSaving = false;
  error: string | null = null;

  async onSave() {
    if (!this.formData.name.trim()) {
      this.error = 'Category name is required';
      return;
    }

    this.isSaving = true;
    this.error = null;

    const success = await this.facade.saveCategory(this.formData);
    this.isSaving = false;

    if (success) {
      this.close.emit();
    } else {
      this.error = this.facade.error();
    }
  }

  onCancel() {
    this.close.emit();
  }
}
