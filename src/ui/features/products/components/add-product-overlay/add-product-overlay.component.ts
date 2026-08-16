import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFacade } from '../../facades/product.facade';
import { SaveProductCommand } from '../../../../../application/contracts/product.application';
import { ProductViewModel } from '../../ui-models/product-view.model';
import { AddCategoryOverlayComponent } from '../add-category-overlay/add-category-overlay.component';

@Component({
  selector: 'app-add-product-overlay',
  standalone: true,
  imports: [CommonModule, FormsModule, AddCategoryOverlayComponent],
  templateUrl: './add-product-overlay.component.html',
  styleUrls: ['./add-product-overlay.component.scss']
})
export class AddProductOverlayComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  
  facade = inject(ProductFacade);

  formData: SaveProductCommand = {
    name: '',
    categoryId: '',
    sellingPrice: 0,
    availability: 'available',
    favourite: false,
    unit: 'Piece'
  };

  isSaving = false;
  error: string | null = null;
  isAddCategoryOpen = false;

  ngOnInit() {
    // If there are categories, auto-select the first one if empty
    const cats = this.facade.categories();
    if (cats.length > 0 && !this.formData.categoryId) {
      this.formData.categoryId = cats[0].id;
    }
  }

  async onSave() {
    if (!this.formData.name.trim() || !this.formData.categoryId || this.formData.sellingPrice <= 0) {
      this.error = 'Please fill out all required fields correctly.';
      return;
    }

    this.isSaving = true;
    this.error = null;

    const success = await this.facade.saveProduct(this.formData);
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

  openAddCategory() {
    this.isAddCategoryOpen = true;
  }

  closeAddCategory() {
    this.isAddCategoryOpen = false;
    // When category is added, reload categories happens automatically in CategoryFacade.
    // However, ProductFacade doesn't auto sync. Let's call loadCategories() to refresh dropdown.
    this.facade.loadCategories();
  }
}
