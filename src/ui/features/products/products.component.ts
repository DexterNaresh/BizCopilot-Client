import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductViewToggleComponent } from './components/product-view-toggle/product-view-toggle.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductSupportPanelComponent } from './components/product-support-panel/product-support-panel.component';
import { BizIconComponent } from '../../shared/components/biz-icon/biz-icon.component';
import { BizPaginationComponent } from '../../shared/components/biz-pagination/biz-pagination.component';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { ToastService } from '../../shared/services/toast.service';
import { ProductApplication } from '@runtime/product/application/product.application';
import { CategoryApplication } from '@runtime/category/application/category.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { AddCategoryModalComponent } from '../categories/components/add-category-modal/add-category-modal.component';
import { ProductInfo } from '@runtime/product/application/dto/product.dto';
import { FilterSheetComponent } from '../../shared/components/filter-sheet/filter-sheet.component';

export interface ProductUIModel {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  isAvailable: boolean;
  isFavourite: boolean;
  colorHint: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductsHeaderComponent,
    ProductSearchComponent,
    ProductsFilterComponent,
    ProductViewToggleComponent,
    ProductGridComponent,
    ProductTableComponent,
    ProductSupportPanelComponent,
    BizIconComponent,
    BizPaginationComponent,
    AddProductModalComponent,
    FilterSheetComponent,
    AddCategoryModalComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']})
export class ProductsComponent implements OnInit {
  viewMode: 'grid' | 'table' = 'grid';
  activeFilter: string = 'all';
  searchTerm: string = '';

  showAddProductModal = false;
  showFiltersSheet = false;
  selectedProductForEdit: any = null;

  showAddCategoryModal = false;

  currentPage = 1;
  pageSize = 10;

  allProducts: ProductUIModel[] = [];
  allCategories: string[] = [];

  constructor(
    private confirmService: ConfirmDialogService,
    private toastService: ToastService,
    private productApp: ProductApplication,
    private categoryApp: CategoryApplication,
    private sessionService: ISessionService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    return user ? user.id : '00000000-0000-0000-0000-000000000000';
  }

  loadProducts() {
    const response = this.productApp.getAllProducts({ userId: this.currentUserId });
    if (response.success && response.data) {
      this.allProducts = response.data
        .filter(p => p.status !== 'ARCHIVED')
        .map(p => this.mapToUIModel(p));
    } else {
      this.toastService.error(response.error?.message || 'Failed to load products');
    }
  }

  loadCategories() {
    const response = this.categoryApp.getAllCategories({ userId: this.currentUserId });
    if (response.success && response.data) {
      this.allCategories = response.data
        .filter(c => c.status !== 'ARCHIVED')
        .map(c => c.name);
    }
  }

  private mapToUIModel(p: ProductInfo): ProductUIModel {
    return {
      id: p.product_id,
      name: p.name,
      category: p.category || 'Uncategorized',
      price: p.price,
      unit: p.type,
      isAvailable: p.available === 1,
      isFavourite: false,
      colorHint: this.getColorForCategory(p.category)
    };
  }

  private getColorForCategory(cat?: string | null): string {
    const colors = ['#F3E8FF', '#FEF3C7', '#E0E7FF', '#D1FAE5', '#FFEDD5'];
    if (!cat) return colors[0];
    const hash = cat.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  }

  get filteredProducts(): ProductUIModel[] {
    return this.allProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      let matchesFilter = true;
      if (this.activeFilter === 'available') matchesFilter = p.isAvailable;
      if (this.activeFilter === 'unavailable') matchesFilter = !p.isAvailable;
      if (this.activeFilter === 'favourites') matchesFilter = p.isFavourite;
      return matchesSearch && matchesFilter;
    });
  }

  get paginatedProducts(): ProductUIModel[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredProducts.slice(start, start + this.pageSize);
  }

  get totalProducts(): number {
    return this.filteredProducts.length;
  }

  get totalProductsCount(): number {
    return this.allProducts.length;
  }

  get availableProductsCount(): number {
    return this.allProducts.filter(p => p.isAvailable).length;
  }

  get unavailableProductsCount(): number {
    return this.allProducts.filter(p => !p.isAvailable).length;
  }

  get favouriteProductsCount(): number {
    return this.allProducts.filter(p => p.isFavourite).length;
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

  onAddProduct() {
    this.selectedProductForEdit = null;
    this.showAddProductModal = true;
  }

  onOpenFilters() {
    this.showFiltersSheet = true;
  }

  closeModals() {
    this.showAddProductModal = false;
    this.showFiltersSheet = false;
    this.showAddCategoryModal = false;
    this.selectedProductForEdit = null;
  }

  onSupportAction(action: string) {
    if (action === 'add_category') {
      this.showAddCategoryModal = true;
    }
  }

  onEditProduct(product: ProductUIModel) {
    this.selectedProductForEdit = {
      id: product.id,
      name: product.name,
      type: product.unit,
      price: product.price,
      category: product.category,
      barcode: ''
    };
    this.showAddProductModal = true;
  }

  async onArchiveProduct(product: ProductUIModel) {
    const isConfirmed = await this.confirmService.confirm({
      variant: 'danger',
      title: `Delete "${product.name}"?`,
      message: 'This product will be permanently deleted.\nThis action cannot be undone.',
      cancelLabel: 'Cancel',
      confirmLabel: 'Delete Product'
    });

    if (isConfirmed) {
      const response = this.productApp.archiveProduct({
        userId: this.currentUserId,
        product_id: product.id
      });
      if (response.success) {
        this.toastService.success(`Product deleted successfully`);
        this.loadProducts();
      } else {
        this.toastService.error(response.error?.message || 'Failed to delete product');
      }
    }
  }

  onToggleFavourite(product: ProductUIModel) {
    product.isFavourite = !product.isFavourite;
  }

  async onToggleAvailability(product: ProductUIModel) {
    if (product.isAvailable) {
      const isConfirmed = await this.confirmService.confirm({
        variant: 'warning',
        title: `Deactivate "${product.name}"?`,
        message: 'This product will no longer be available for billing.',
        cancelLabel: 'Cancel',
        confirmLabel: 'Deactivate'
      });

      if (isConfirmed) {
        const response = this.productApp.updateAvailability({
          userId: this.currentUserId,
          product_id: product.id,
          available: false
        });
        if (response.success) {
          this.toastService.info('Product deactivated');
          this.loadProducts();
        } else {
          this.toastService.error(response.error?.message || 'Error');
        }
      }
    } else {
      const response = this.productApp.updateAvailability({
        userId: this.currentUserId,
        product_id: product.id,
        available: true
      });
      if (response.success) {
        this.toastService.success('Product activated');
        this.loadProducts();
      } else {
        this.toastService.error(response.error?.message || 'Error');
      }
    }
  }

  onSaveProduct(productData: any) {
    if (this.selectedProductForEdit) {
      const response = this.productApp.updateProduct({
        userId: this.currentUserId,
        product_id: this.selectedProductForEdit.id,
        name: productData.name,
        type: productData.type,
        price: productData.price,
        category: productData.category,
        barcode: productData.barcode
      });
      if (response.success) {
        this.toastService.success('Product updated successfully');
        this.loadProducts();
        this.closeModals();
      } else {
        this.toastService.error(response.error?.message || 'Error');
      }
    } else {
      const response = this.productApp.createProduct({
        userId: this.currentUserId,
        name: productData.name,
        type: productData.type,
        price: productData.price,
        category: productData.category,
        barcode: productData.barcode
      });
      if (response.success) {
        this.toastService.success('Product created successfully');
        this.loadProducts();
        if (!productData.addAnother) {
          this.closeModals();
        }
      } else {
        this.toastService.error(response.error?.message || 'Error');
      }
    }
  }

  onSaveCategory(categoryData: any) {
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
      this.closeModals();
    } else {
      this.toastService.error(response.error?.message || 'Error creating category');
    }
  }
}
