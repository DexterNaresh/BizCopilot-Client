import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesHeaderComponent } from './components/categories-header/categories-header.component';
import { CategorySearchComponent } from './components/category-search/category-search.component';
import { CategoriesFilterComponent } from './components/categories-filter/categories-filter.component';
import { CategoryViewToggleComponent } from './components/category-view-toggle/category-view-toggle.component';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategorySupportPanelComponent } from './components/category-support-panel/category-support-panel.component';
import { BizPaginationComponent } from '../../shared/components/biz-pagination/biz-pagination.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { ToastService } from '../../shared/services/toast.service';
import { CategoryApplication } from '@runtime/category/application/category.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { CategoryInfo } from '@runtime/category/application/dto/category.dto';
import { ProductApplication } from '@runtime/product/application/product.application';
import { FilterSheetComponent } from '../../shared/components/filter-sheet/filter-sheet.component';

export interface CategoryUIModel {
  id: string;
  name: string;
  description: string;
  productsCount: number;
  status: 'Active' | 'Inactive';
  icon: string;
  colorHint: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesHeaderComponent,
    CategorySearchComponent,
    CategoriesFilterComponent,
    CategoryViewToggleComponent,
    CategoryGridComponent,
    CategoryTableComponent,
    CategorySupportPanelComponent,
    BizPaginationComponent,
    AddCategoryModalComponent,
    FilterSheetComponent
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  viewMode: 'grid' | 'table' = 'grid';
  activeFilter: string = 'all';
  searchTerm: string = '';

  showAddCategoryModal = false;
  showFiltersSheet = false;
  selectedCategoryForEdit: any = null;

  currentPage = 1;
  pageSize = 12;

  allCategories: CategoryUIModel[] = [];

  constructor(
    private confirmService: ConfirmDialogService,
    private toastService: ToastService,
    private categoryApp: CategoryApplication,
    private productApp: ProductApplication,
    private sessionService: ISessionService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    return user ? user.id : '00000000-0000-0000-0000-000000000000';
  }

  loadCategories() {
    const response = this.categoryApp.getAllCategories({ userId: this.currentUserId });
    if (response.success && response.data) {
      const productResponse = this.productApp.getAllProducts({ userId: this.currentUserId });
      let allProducts: any[] = [];
      if (productResponse.success && productResponse.data) {
        allProducts = productResponse.data;
      }

      this.allCategories = response.data
        .filter(c => c.status !== 'ARCHIVED')
        .map(c => {
          const count = allProducts.filter(p => p.category === c.name).length;
          return this.mapToUIModel(c, count);
        });
    } else {
      this.toastService.error(response.error?.message || 'Failed to load categories');
    }
  }

  private mapToUIModel(c: CategoryInfo, count: number): CategoryUIModel {
    return {
      id: c.category_id,
      name: c.name,
      description: c.description || '',
      productsCount: count,
      status: c.status === 'ACTIVE' ? 'Active' : 'Inactive',
      icon: c.icon || 'folder',
      colorHint: c.color_hint || '#F3E8FF'
    };
  }

  get filteredCategories(): CategoryUIModel[] {
    return this.allCategories.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      let matchesFilter = true;
      if (this.activeFilter === 'active') matchesFilter = c.status === 'Active';
      if (this.activeFilter === 'inactive') matchesFilter = c.status === 'Inactive';
      return matchesSearch && matchesFilter;
    });
  }

  get paginatedCategories(): CategoryUIModel[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredCategories.slice(start, start + this.pageSize);
  }

  get totalCategories(): number {
    return this.filteredCategories.length;
  }

  get totalCategoriesCount(): number {
    return this.allCategories.length;
  }

  get activeCategoriesCount(): number {
    return this.allCategories.filter(c => c.status === 'Active').length;
  }

  get inactiveCategoriesCount(): number {
    return this.allCategories.filter(c => c.status === 'Inactive').length;
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1;
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.currentPage = 1;
  }

  onFilterChange(filter: string) {
    this.activeFilter = filter;
    this.currentPage = 1;
  }

  onViewModeChange(mode: 'grid' | 'table') {
    this.viewMode = mode;
  }

  onAddCategory() {
    this.selectedCategoryForEdit = null;
    this.showAddCategoryModal = true;
  }

  onOpenFilters() {
    this.showFiltersSheet = true;
  }

  closeModals() {
    this.showAddCategoryModal = false;
    this.showFiltersSheet = false;
    this.selectedCategoryForEdit = null;
  }

  onEditCategory(category: CategoryUIModel) {
    this.selectedCategoryForEdit = {
      id: category.id,
      name: category.name,
      icon: category.icon,
      colorHint: category.colorHint,
      description: category.description
    };
    this.showAddCategoryModal = true;
  }

  async onDeleteCategory(category: CategoryUIModel) {
    const isConfirmed = await this.confirmService.confirm({
      variant: 'danger',
      title: `Delete "${category.name}"?`,
      message: category.productsCount > 0 
        ? `This category has ${category.productsCount} products assigned to it.\nAll ${category.productsCount} products will be moved to "Unassigned".\nYour products will not be deleted.`
        : 'This category has no products assigned to it.',
      cancelLabel: 'Cancel',
      confirmLabel: 'Delete Category'
    });

    if (isConfirmed) {
      const response = this.categoryApp.archiveCategory({
        userId: this.currentUserId,
        category_id: category.id
      });
      if (response.success) {
        this.toastService.success(`Category deleted successfully`);
        this.loadCategories();
      } else {
        this.toastService.error(response.error?.message || 'Failed to delete category');
      }
    }
  }

  onToggleStatus(category: CategoryUIModel) {
    const newStatus = category.status === 'Active' ? 'INACTIVE' : 'ACTIVE';
    const response = this.categoryApp.updateStatus({
      userId: this.currentUserId,
      category_id: category.id,
      status: newStatus
    });
    
    if (response.success) {
      this.toastService.success(`Category ${newStatus === 'ACTIVE' ? 'activated' : 'deactivated'}`);
      this.loadCategories();
    } else {
      this.toastService.error(response.error?.message || 'Failed to update category status');
    }
  }

  onSaveCategory(categoryData: any) {
    if (this.selectedCategoryForEdit) {
      const response = this.categoryApp.updateCategory({
        userId: this.currentUserId,
        category_id: this.selectedCategoryForEdit.id,
        name: categoryData.name,
        description: categoryData.description || null,
        icon: categoryData.icon,
        color_hint: categoryData.colorHint
      });
      if (response.success) {
        this.toastService.success('Category updated successfully');
        this.loadCategories();
        this.closeModals();
      } else {
        this.toastService.error(response.error?.message || 'Error updating category');
      }
    } else {
      const response = this.categoryApp.createCategory({
        userId: this.currentUserId,
        name: categoryData.name,
        description: categoryData.description || null,
        icon: categoryData.icon,
        color_hint: categoryData.colorHint
      });
      if (response.success) {
        this.toastService.success('Category created successfully');
        this.loadCategories();
        if (!categoryData.addAnother) {
          this.closeModals();
        }
      } else {
        this.toastService.error(response.error?.message || 'Error creating category');
      }
    }
  }
}
