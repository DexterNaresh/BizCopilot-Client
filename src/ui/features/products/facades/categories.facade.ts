import { Injectable, signal, computed } from '@angular/core';
import { CategoryViewModel, CategoryStatusFilter } from '../models/category-view.model';

const INITIAL_CATEGORIES: CategoryViewModel[] = [
  { id: 'cat-1', name: 'Beverages', description: 'Hot and cold beverages, coffees, juices', icon: 'local_cafe', status: 'ACTIVE', productCount: 32, createdAt: '15 May 2025 10:30 AM' },
  { id: 'cat-2', name: 'Desserts', description: 'Cakes, pastries, sweet treats', icon: 'cake', status: 'ACTIVE', productCount: 18, createdAt: '15 May 2025 09:15 AM' },
  { id: 'cat-3', name: 'Food', description: 'Pizzas, burgers, pastas, meals', icon: 'restaurant', status: 'ACTIVE', productCount: 45, createdAt: '14 May 2025 04:45 PM' },
  { id: 'cat-4', name: 'Sides', description: 'Fries, breads, finger foods', icon: 'fastfood', status: 'ACTIVE', productCount: 16, createdAt: '14 May 2025 02:20 PM' },
  { id: 'cat-5', name: 'Snacks', description: 'Quick bites and packaged snacks', icon: 'shopping_bag', status: 'ACTIVE', productCount: 20, createdAt: '13 May 2025 11:10 AM' },
  { id: 'cat-6', name: 'Bakery', description: 'Freshly baked breads and buns', icon: 'bakery_dining', status: 'ACTIVE', productCount: 12, createdAt: '12 May 2025 05:30 PM' },
  { id: 'cat-7', name: 'Combos', description: 'Value meal combos', icon: 'local_offer', status: 'INACTIVE', productCount: 8, createdAt: '10 May 2025 01:25 PM' },
  { id: 'cat-8', name: 'Health Drinks', description: 'Smoothies and protein shakes', icon: 'eco', status: 'ACTIVE', productCount: 3, createdAt: '08 May 2025 09:40 AM' },
];

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacade {
  readonly categories = signal<CategoryViewModel[]>(INITIAL_CATEGORIES);
  readonly searchQuery = signal<string>('');
  readonly statusFilter = signal<CategoryStatusFilter>('all');

  // Overlay control signals
  readonly isAddCategoryOpen = signal<boolean>(false);
  readonly editingCategory = signal<CategoryViewModel | null>(null);
  readonly deletingCategory = signal<CategoryViewModel | null>(null);

  // Filtered categories
  readonly filteredCategories = computed(() => {
    const list = this.categories();
    const query = this.searchQuery().toLowerCase().trim();
    const status = this.statusFilter();

    return list.filter(cat => {
      const matchesSearch = !query || cat.name.toLowerCase().includes(query) || (cat.description && cat.description.toLowerCase().includes(query));
      const matchesStatus = status === 'all' || (status === 'active' && cat.status === 'ACTIVE') || (status === 'inactive' && cat.status === 'INACTIVE');
      return matchesSearch && matchesStatus;
    });
  });

  // Statistics
  readonly totalCategories = computed(() => this.categories().length);
  readonly activeCategoriesCount = computed(() => this.categories().filter(c => c.status === 'ACTIVE').length);
  readonly totalProductsAcrossCategories = computed(() => this.categories().reduce((sum, c) => sum + c.productCount, 0));

  readonly mostUsedCategory = computed(() => {
    const list = this.categories();
    if (list.length === 0) return null;
    return [...list].sort((a, b) => b.productCount - a.productCount)[0];
  });

  readonly unusedCategoriesCount = computed(() => this.categories().filter(c => c.productCount === 0).length);

  setSearchQuery(query: string): void {
    this.searchQuery.set(query);
  }

  setStatusFilter(filter: CategoryStatusFilter): void {
    this.statusFilter.set(filter);
  }

  openAddCategoryModal(): void {
    this.editingCategory.set(null);
    this.isAddCategoryOpen.set(true);
  }

  openEditCategoryModal(category: CategoryViewModel): void {
    this.editingCategory.set(category);
    this.isAddCategoryOpen.set(true);
  }

  closeAddCategoryModal(): void {
    this.isAddCategoryOpen.set(false);
    this.editingCategory.set(null);
  }

  openDeleteCategoryModal(category: CategoryViewModel): void {
    this.deletingCategory.set(category);
  }

  closeDeleteCategoryModal(): void {
    this.deletingCategory.set(null);
  }

  saveCategory(categoryData: Partial<CategoryViewModel>): void {
    const existing = this.editingCategory();
    if (existing) {
      this.categories.update(list => list.map(item => item.id === existing.id ? { ...item, ...categoryData, updatedAt: 'Just now' } : item));
    } else {
      const newCategory: CategoryViewModel = {
        id: `cat-${Date.now()}`,
        name: categoryData.name || 'New Category',
        description: categoryData.description || '',
        icon: categoryData.icon || 'folder',
        status: categoryData.status || 'ACTIVE',
        productCount: 0,
        createdAt: 'Just now'
      };
      this.categories.update(list => [newCategory, ...list]);
    }
    this.closeAddCategoryModal();
  }

  deleteCategory(categoryId: string): void {
    this.categories.update(list => list.filter(item => item.id !== categoryId));
    this.closeDeleteCategoryModal();
  }
}
