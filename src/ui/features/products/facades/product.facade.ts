import { Injectable, computed, inject, signal } from '@angular/core';
import { ProductApplication, SaveProductCommand } from '../../../../application/contracts/product.application';
import { CategoryApplication } from '../../../../application/contracts/category.application';
import { ProductViewModel } from '../ui-models/product-view.model';
import { CategoryViewModel } from '../../categories/ui-models/category-view.model';

export type ProductFilter = 'all' | 'available' | 'unavailable';
export type ProductViewMode = 'grid' | 'table';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {
  private productApp = inject(ProductApplication);
  private categoryApp = inject(CategoryApplication);

  // State
  private _products = signal<ProductViewModel[]>([]);
  private _categories = signal<CategoryViewModel[]>([]);
  private _isLoading = signal<boolean>(false);
  private _error = signal<string | null>(null);
  
  // View State
  private _searchQuery = signal<string>('');
  private _availabilityFilter = signal<ProductFilter>('all');
  private _categoryFilter = signal<string>('all'); // 'all' or categoryId
  private _favouriteOnly = signal<boolean>(false);
  private _viewMode = signal<ProductViewMode>('grid');

  // Computed
  products = computed(() => {
    let result = this._products();
    
    // Apply availability filter
    if (this._availabilityFilter() === 'available') {
      result = result.filter(p => p.availability === 'available');
    } else if (this._availabilityFilter() === 'unavailable') {
      result = result.filter(p => p.availability === 'unavailable');
    }

    // Apply category filter
    if (this._categoryFilter() !== 'all') {
      result = result.filter(p => p.categoryId === this._categoryFilter());
    }

    // Apply favourite filter
    if (this._favouriteOnly()) {
      result = result.filter(p => p.favourite);
    }
    
    // Apply search filter (name or barcode)
    const query = this._searchQuery().toLowerCase().trim();
    if (query) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        (p.barcode && p.barcode.toLowerCase().includes(query))
      );
    }
    
    return result;
  });

  categories = computed(() => this._categories());
  isLoading = computed(() => this._isLoading());
  error = computed(() => this._error());
  
  searchQuery = computed(() => this._searchQuery());
  availabilityFilter = computed(() => this._availabilityFilter());
  categoryFilter = computed(() => this._categoryFilter());
  favouriteOnly = computed(() => this._favouriteOnly());
  viewMode = computed(() => this._viewMode());

  // Aggregate counts
  totalCount = computed(() => this._products().length);
  availableCount = computed(() => this._products().filter(p => p.availability === 'available').length);
  unavailableCount = computed(() => this._products().filter(p => p.availability === 'unavailable').length);
  favouriteCount = computed(() => this._products().filter(p => p.favourite).length);

  loadInitialData() {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this._isLoading.set(true);
    this._error.set(null);
    this.productApp.getProducts().subscribe(result => {
      this._isLoading.set(false);
      if (result.success) {
        this._products.set(result.data!.map(p => ({
          id: p.id,
          name: p.name,
          categoryId: p.categoryId,
          categoryName: p.categoryName,
          sellingPrice: p.sellingPrice,
          image: p.image,
          availability: p.availability,
          favourite: p.favourite,
          barcode: p.barcode,
          unit: p.unit
        })));
      } else {
        this._error.set(result.error.message);
      }
    });
  }

  loadCategories() {
    this.categoryApp.getCategories().subscribe(result => {
      if (result.success) {
        this._categories.set(result.data!.map(c => ({
          id: c.id,
          name: c.name,
          description: c.description,
          icon: c.icon,
          status: c.status,
          productCount: c.productCount,
          createdAt: new Date(c.createdAt)
        })));
      }
    });
  }

  // Filters & Controls
  setSearchQuery(query: string) {
    this._searchQuery.set(query);
  }

  setAvailabilityFilter(filter: ProductFilter) {
    this._availabilityFilter.set(filter);
  }

  setCategoryFilter(categoryId: string) {
    this._categoryFilter.set(categoryId);
  }

  toggleFavouriteFilter() {
    this._favouriteOnly.update(v => !v);
  }

  setViewMode(mode: ProductViewMode) {
    this._viewMode.set(mode);
  }

  // Actions
  toggleProductFavourite(id: string, favourite: boolean) {
    // Optimistic update
    this._products.update(products => products.map(p => p.id === id ? { ...p, favourite } : p));
    
    this.productApp.toggleFavourite(id, favourite).subscribe(result => {
      if (!result.success) {
        // Revert on failure
        this._products.update(products => products.map(p => p.id === id ? { ...p, favourite: !favourite } : p));
        this._error.set(result.error.message);
      }
    });
  }

  toggleProductAvailability(id: string, availability: 'available' | 'unavailable') {
    // Optimistic update
    this._products.update(products => products.map(p => p.id === id ? { ...p, availability } : p));
    
    this.productApp.toggleAvailability(id, availability).subscribe(result => {
      if (!result.success) {
        // Revert on failure
        const revertStatus = availability === 'available' ? 'unavailable' : 'available';
        this._products.update(products => products.map(p => p.id === id ? { ...p, availability: revertStatus } : p));
        this._error.set(result.error.message);
      }
    });
  }

  saveProduct(command: SaveProductCommand): Promise<boolean> {
    return new Promise((resolve) => {
      this._isLoading.set(true);
      this.productApp.saveProduct(command).subscribe(result => {
        this._isLoading.set(false);
        if (result.success) {
          this.loadProducts();
          resolve(true);
        } else {
          this._error.set(result.error.message);
          resolve(false);
        }
      });
    });
  }

  deleteProduct(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      this._isLoading.set(true);
      this.productApp.deleteProduct(id).subscribe(result => {
        this._isLoading.set(false);
        if (result.success) {
          this.loadProducts();
          resolve(true);
        } else {
          this._error.set(result.error.message);
          resolve(false);
        }
      });
    });
  }
}
