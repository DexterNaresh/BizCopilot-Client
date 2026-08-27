import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesHeaderComponent } from './components/categories-header/categories-header.component';
import { CategorySearchComponent } from './components/category-search/category-search.component';
import { CategoriesFilterComponent } from './components/categories-filter/categories-filter.component';
import { CategoryViewToggleComponent } from './components/category-view-toggle/category-view-toggle.component';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategorySupportPanelComponent } from './components/category-support-panel/category-support-panel.component';
import { BizIconComponent } from '../../shared/components/biz-icon/biz-icon.component';
import { BizPaginationComponent } from '../../shared/components/biz-pagination/biz-pagination.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { ToastService } from '../../shared/services/toast.service';

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
    BizIconComponent,
    BizPaginationComponent,
    AddCategoryModalComponent
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  viewMode: 'grid' | 'table' = 'grid';
  activeFilter: string = 'all';

  showAddCategoryModal = false;
  showFiltersSheet = false;
  selectedCategoryForEdit: any = null;

  // Pagination state
  currentPage = 1;
  pageSize = 12; // Grid default is 12 for Categories
  totalCategories = 24;

  constructor(
    private confirmService: ConfirmDialogService,
    private toastService: ToastService
  ) {}

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1; // Reset to first page
  }

  // Dummy Data for UI implementation
  categories = [
    {
      id: 1,
      name: 'Beverages',
      productsCount: 48,
      status: 'Active',
      icon: 'local_cafe',
      colorHint: '#F3E8FF' // Purple
    },
    {
      id: 2,
      name: 'Food',
      productsCount: 120,
      status: 'Active',
      icon: 'restaurant_menu',
      colorHint: '#FFEDD5' // Orange
    },
    {
      id: 3,
      name: 'Snacks',
      productsCount: 35,
      status: 'Active',
      icon: 'fastfood',
      colorHint: '#FEF3C7' // Yellow/Amber
    },
    {
      id: 4,
      name: 'Desserts',
      productsCount: 28,
      status: 'Active',
      icon: 'cake',
      colorHint: '#FCE7F3' // Pink
    },
    {
      id: 5,
      name: 'Bakery',
      productsCount: 22,
      status: 'Active',
      icon: 'bakery_dining',
      colorHint: '#FFEDD5' // Orange
    },
    {
      id: 6,
      name: 'Dairy',
      productsCount: 18,
      status: 'Active',
      icon: 'local_drink',
      colorHint: '#E0E7FF' // Blue
    },
    {
      id: 7,
      name: 'Fruits',
      productsCount: 26,
      status: 'Active',
      icon: 'eco',
      colorHint: '#DCFCE7' // Green
    },
    {
      id: 8,
      name: 'Vegetables',
      productsCount: 30,
      status: 'Active',
      icon: 'energy_savings_leaf',
      colorHint: '#DCFCE7' // Green
    },
    {
      id: 9,
      name: 'Sauces & Spreads',
      productsCount: 12,
      status: 'Active',
      icon: 'soup_kitchen',
      colorHint: '#FEE2E2' // Red
    },
    {
      id: 10,
      name: 'Dry Fruits',
      productsCount: 15,
      status: 'Active',
      icon: 'eco',
      colorHint: '#F3E8FF' // Purple
    },
    {
      id: 11,
      name: 'Ice Cream',
      productsCount: 16,
      status: 'Active',
      icon: 'icecream',
      colorHint: '#DBEAFE' // Light Blue
    },
    {
      id: 12,
      name: 'Combo Meals',
      productsCount: 8,
      status: 'Inactive',
      icon: 'set_meal',
      colorHint: '#F3F4F6' // Gray
    }
  ];

  onSearch(term: string) {
    console.log('Search:', term);
  }

  onFilterChange(filter: string) {
    this.activeFilter = filter;
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

  onEditCategory(category: any) {
    this.selectedCategoryForEdit = category;
    this.showAddCategoryModal = true;
  }

  async onDeleteCategory(category: any) {
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
      this.categories = this.categories.filter(c => c.id !== category.id);
      this.totalCategories--;
      this.toastService.success(`Category deleted successfully`);
    }
  }

  onToggleStatus(category: any) {
    category.status = category.status === 'Active' ? 'Inactive' : 'Active';
  }

  onSaveCategory(categoryData: any) {
    if (this.selectedCategoryForEdit) {
      // Update existing
      const index = this.categories.findIndex(c => c.id === categoryData.id);
      if (index !== -1) {
        this.categories[index] = { ...this.categories[index], ...categoryData };
      }
    } else {
      // Create new
      this.categories.unshift({
        ...categoryData,
        productsCount: 0,
        status: 'Active',
        colorHint: '#F3E8FF'
      });
      this.totalCategories++;
    }
    this.toastService.success(this.selectedCategoryForEdit ? 'Category updated successfully' : 'Category created successfully');
    this.closeModals();
  }
}
