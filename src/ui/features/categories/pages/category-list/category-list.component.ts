import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryFacade, CategorySortField, SortDirection } from '../../facades/category.facade';
import { CategoryTableComponent } from '../../components/category-table/category-table.component';
import { CategoryListItemComponent } from '../../components/category-list-item/category-list-item.component';
import { CategoryPaginationComponent } from '../../components/category-pagination/category-pagination.component';
import { CategoryViewModel } from '../../ui-models/category-view.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CategoryTableComponent,
    CategoryListItemComponent,
    CategoryPaginationComponent
  ],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  facade = inject(CategoryFacade);
  router = inject(Router);

  ngOnInit() {
    this.updatePageSize();
    this.facade.loadCategories();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updatePageSize();
  }

  private updatePageSize() {
    const isMobile = window.innerWidth < 768;
    const targetSize = isMobile ? 6 : 10;
    if (this.facade.pageSize() !== targetSize) {
      this.facade.setPageSize(targetSize);
    }
  }

  onAddCategory() {
    this.router.navigate(['/categories/new']);
  }

  onEditCategory(category: CategoryViewModel) {
    this.router.navigate(['/categories', category.id, 'edit']);
  }

  async onDeleteCategory(category: CategoryViewModel) {
    if (category.productCount > 0) {
      alert(`Cannot delete category "${category.name}".\n\nThis category contains ${category.productCount} products. Move or remove the products before deleting this category.`);
      return;
    }

    if (confirm(`Delete Category?\n\nAre you sure you want to delete "${category.name}"?`)) {
      await this.facade.deleteCategory(category.id);
    }
  }

  onSearchChange(event: any) {
    this.facade.setSearchQuery(event.target.value);
  }

  onStatusChange(event: any) {
    this.facade.setStatusFilter(event.target.value);
  }

  onSortChange(sort: { field: CategorySortField, direction: SortDirection }) {
    this.facade.setSort(sort.field, sort.direction);
  }

  onPageChange(page: number) {
    this.facade.setPage(page);
  }

  onPageSizeChange(size: number) {
    this.facade.setPageSize(size);
  }
}
