import { Component, OnInit, inject, signal } from '@angular/core';
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

  mode: 'create' | 'edit' = 'create';
  categoryId: string | null = null;
  category = signal<CategoryViewModel | null>(null);

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.mode = this.categoryId ? 'edit' : 'create';

    if (this.mode === 'edit' && this.categoryId) {
      // First check if it's already loaded
      this.findCategory();
      
      // If not found, wait for facade to load (or trigger load if empty)
      if (!this.category() && this.facade.categories().length === 0) {
        this.facade.loadCategories();
        // Since signals are reactive, we could use an effect, but for simplicity here we just check again after a tick
        setTimeout(() => this.findCategory(), 500); // Wait for load (simplistic approach for V1)
      }
    }
  }

  private findCategory() {
    const found = this.facade.categories().find(c => c.id === this.categoryId) || 
                  this.facade.filteredCategories().find(c => c.id === this.categoryId); // check full list
    if (found) {
      this.category.set(found);
    }
  }

  async onSave(data: Partial<CategoryViewModel>) {
    const command: SaveCategoryCommand = {
      id: this.mode === 'edit' ? this.categoryId! : undefined,
      name: data.name!,
      status: data.status! as 'active' | 'inactive'
    };

    const success = await this.facade.saveCategory(command);
    if (success) {
      this.router.navigate(['/categories']);
    } else {
      // Error is handled by facade and can be shown in a toast or form
      alert('Failed to save category. ' + this.facade.error());
    }
  }

  onCancel() {
    this.router.navigate(['/categories']);
  }
}
