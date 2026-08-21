import { Injectable, computed, inject, signal } from '@angular/core';
import { CategoryApplication, SaveCategoryCommand } from '../../../../application/contracts/category.application';
import { CategoryViewModel } from '../ui-models/category-view.model';

export type CategorySortField = 'name' | 'productCount' | 'status' | 'createdAt';
export type SortDirection = 'asc' | 'desc';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacade {
  private categoryApp = inject(CategoryApplication);

  // State
  private _categories = signal<CategoryViewModel[]>([]);
  private _isLoading = signal<boolean>(false);
  private _isSaving = signal<boolean>(false);
  private _error = signal<string | null>(null);
  
  // Filtering
  private _searchQuery = signal<string>('');
  private _statusFilter = signal<'all' | 'active' | 'inactive'>('all');

  // Sorting
  private _sortField = signal<CategorySortField>('createdAt');
  private _sortDirection = signal<SortDirection>('desc');

  // Pagination
  private _page = signal<number>(1);
  private _pageSize = signal<number>(10);

  // Computed Properties

  // 1. Filtered Dataset
  filteredCategories = computed(() => {
    let result = this._categories();
    
    // Apply status filter
    if (this._statusFilter() !== 'all') {
      result = result.filter(c => c.status === this._statusFilter());
    }
    
    // Apply search filter
    const query = this._searchQuery().toLowerCase().trim();
    if (query) {
      result = result.filter(c => c.name.toLowerCase().includes(query));
    }

    return result;
  });

  // 2. Sorted Dataset
  sortedCategories = computed(() => {
    const data = [...this.filteredCategories()];
    const field = this._sortField();
    const direction = this._sortDirection();
    const modifier = direction === 'asc' ? 1 : -1;

    return data.sort((a, b) => {
      let valA: any = a[field];
      let valB: any = b[field];

      if (field === 'createdAt') {
        valA = valA.getTime();
        valB = valB.getTime();
      } else if (typeof valA === 'string') {
        valA = valA.toLowerCase();
        valB = (valB as string).toLowerCase();
      }

      if (valA < valB) return -1 * modifier;
      if (valA > valB) return 1 * modifier;
      return 0;
    });
  });

  // 3. Paginated Dataset
  categories = computed(() => {
    const data = this.sortedCategories();
    const page = this._page();
    const pageSize = this._pageSize();
    
    const startIndex = (page - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  });

  // Derived properties
  totalCount = computed(() => this.filteredCategories().length);
  isLoading = computed(() => this._isLoading());
  isSaving = computed(() => this._isSaving());
  error = computed(() => this._error());
  
  searchQuery = computed(() => this._searchQuery());
  statusFilter = computed(() => this._statusFilter());
  
  sortField = computed(() => this._sortField());
  sortDirection = computed(() => this._sortDirection());
  
  page = computed(() => this._page());
  pageSize = computed(() => this._pageSize());

  // Actions

  loadCategories() {
    this._isLoading.set(true);
    this._error.set(null);
    this.categoryApp.getCategories().subscribe(result => {
      this._isLoading.set(false);
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
      } else {
        this._error.set(result.error.message);
      }
    });
  }

  setSearchQuery(query: string) {
    this._searchQuery.set(query);
    this._page.set(1); // Reset pagination
  }

  setStatusFilter(status: 'all' | 'active' | 'inactive') {
    this._statusFilter.set(status);
    this._page.set(1); // Reset pagination
  }

  setSort(field: CategorySortField, direction: SortDirection) {
    this._sortField.set(field);
    this._sortDirection.set(direction);
    this._page.set(1); // Reset pagination
  }

  setPage(page: number) {
    this._page.set(page);
  }

  setPageSize(size: number) {
    this._pageSize.set(size);
    this._page.set(1); // Reset pagination
  }

  saveCategory(command: SaveCategoryCommand): Promise<boolean> {
    return new Promise((resolve) => {
      this._isSaving.set(true);
      this.categoryApp.saveCategory(command).subscribe(result => {
        this._isSaving.set(false);
        if (result.success) {
          this.loadCategories(); // reload list
          resolve(true);
        } else {
          this._error.set(result.error.message);
          resolve(false);
        }
      });
    });
  }

  deleteCategory(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      this._isLoading.set(true);
      this.categoryApp.deleteCategory(id).subscribe(result => {
        this._isLoading.set(false);
        if (result.success) {
          this.loadCategories();
          resolve(true);
        } else {
          this._error.set(result.error.message);
          resolve(false);
        }
      });
    });
  }
}
