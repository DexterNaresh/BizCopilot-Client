import { Component } from '@angular/core';
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
    AddProductModalComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']})
export class ProductsComponent {
  viewMode: 'grid' | 'table' = 'grid';
  activeFilter: string = 'all';

  showAddProductModal = false;
  showFiltersSheet = false;
  selectedProductForEdit: any = null;

  // Pagination state
  currentPage = 1;
  pageSize = 10;
  totalProducts = 156;

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
  products = [
    {
      id: 1,
      name: 'Premium Leather Office Chair with Lumbar Support',
      category: 'Furniture',
      price: 12500,
      unit: 'Qty',
      isAvailable: true,
      isFavourite: false,
      colorHint: '#F3E8FF' // Purple 100
    },
    {
      id: 2,
      name: 'Organic Arabica Coffee Beans - Dark Roast',
      category: 'Groceries',
      price: 850,
      unit: 'Kg',
      isAvailable: true,
      isFavourite: true,
      colorHint: '#FEF3C7' // Amber 100
    },
    {
      id: 3,
      name: 'Ultra-Wide Curved Gaming Monitor 34-inch',
      category: 'Electronics',
      price: 45000,
      unit: 'Qty',
      isAvailable: false,
      isFavourite: false,
      colorHint: '#E0E7FF' // Indigo 100
    },
    {
      id: 4,
      name: 'Industrial Grade Heavy Duty Packaging Tape',
      category: 'Stationery',
      price: 120,
      unit: 'Pack',
      isAvailable: true,
      isFavourite: false,
      colorHint: '#D1FAE5' // Emerald 100
    },
    {
      id: 5,
      name: 'Copper Wire 2.5mm Sq Fire Resistant',
      category: 'Electricals',
      price: 45,
      unit: 'Meter',
      isAvailable: true,
      isFavourite: true,
      colorHint: '#FFEDD5' // Orange 100
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
    this.selectedProductForEdit = null;
  }

  onEditProduct(product: any) {
    this.selectedProductForEdit = product;
    this.showAddProductModal = true;
  }

  async onArchiveProduct(product: any) {
    const isConfirmed = await this.confirmService.confirm({
      variant: 'danger',
      title: `Delete "${product.name}"?`,
      message: 'This product will be permanently deleted.\nThis action cannot be undone.',
      cancelLabel: 'Cancel',
      confirmLabel: 'Delete Product'
    });

    if (isConfirmed) {
      this.products = this.products.filter(p => p.id !== product.id);
      this.totalProducts--;
      this.toastService.success(`Product deleted successfully`);
    }
  }

  onToggleFavourite(product: any) {
    product.isFavourite = !product.isFavourite;
  }

  async onToggleAvailability(product: any) {
    if (product.isAvailable) {
      // Deactivating
      const isConfirmed = await this.confirmService.confirm({
        variant: 'warning',
        title: `Deactivate "${product.name}"?`,
        message: 'This product will no longer be available for billing.',
        cancelLabel: 'Cancel',
        confirmLabel: 'Deactivate'
      });

      if (isConfirmed) {
        product.isAvailable = false;
        this.toastService.info('Product deactivated');
      }
    } else {
      // Activating
      product.isAvailable = true;
      this.toastService.success('Product activated');
    }
  }

  onSaveProduct(productData: any) {
    if (this.selectedProductForEdit) {
      // Update existing
      const index = this.products.findIndex(p => p.id === productData.id);
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...productData, unit: productData.type };
      }
    } else {
      // Create new
      this.products.unshift({
        ...productData,
        unit: productData.type,
        isAvailable: true,
        isFavourite: false,
        colorHint: '#F3E8FF'
      });
      this.totalProducts++;
    }
    this.toastService.success(this.selectedProductForEdit ? 'Product updated successfully' : 'Product created successfully');
    this.closeModals();
  }
}
