import { Component, OnInit, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryFacade } from '../../facades/category.facade';
import { CategoryFormComponent } from '../../components/category-form/category-form.component';
import { CategoryViewModel } from '../../ui-models/category-view.model';
import { SaveCategoryCommand } from '../../../../../application/contracts/category.application';

@Component({
  selector: 'app-category-form-page',
  standalone: true,
  imports: [CommonModule, CategoryFormComponent],
  templateUrl: './category-form-page.component.html',
  styleUrls: ['./category-form-page.component.scss']
})
export class CategoryFormPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public facade = inject(CategoryFacade);

  @ViewChild(CategoryFormComponent) formComponent?: CategoryFormComponent;

  mode: 'create' | 'edit' = 'create';
  categoryId: string | null = null;
  category = signal<CategoryViewModel | null>(null);

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.mode = this.categoryId ? 'edit' : 'create';

    if (this.mode === 'edit' && this.categoryId) {
      this.findCategory();
      if (!this.category() && this.facade.categories().length === 0) {
        this.facade.loadCategories();
        setTimeout(() => this.findCategory(), 500); 
      }
    }
  }

  private findCategory() {
    const found = this.facade.categories().find(c => c.id === this.categoryId) || 
                  this.facade.filteredCategories().find(c => c.id === this.categoryId);
    if (found) {
      this.category.set(found);
    }
  }

  async onSave(data: Partial<CategoryViewModel>) {
    const command: SaveCategoryCommand = {
      id: this.mode === 'edit' ? this.categoryId! : undefined,
      name: data.name!,
      description: data.description,
      icon: data.icon,
      status: data.status! as 'active' | 'inactive'
    };

    const success = await this.facade.saveCategory(command);
    if (success) {
      if (this.formComponent) this.formComponent.form.markAsPristine();
      this.router.navigate(['/categories']);
    } else {
      alert('Failed to save category. ' + this.facade.error());
    }
  }

  onCancel() {
    if (this.formComponent && this.formComponent.form.dirty) {
      const confirmDiscard = confirm('You have unsaved changes. Are you sure you want to discard them?');
      if (!confirmDiscard) return;
    }
    this.router.navigate(['/categories']);
  }
}
