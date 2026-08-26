export type ProductViewMode = 'grid' | 'table';

export type ProductAvailability = 'available' | 'unavailable';

export type ProductUnit = 'qty' | 'kg' | 'ltr' | 'meter';

export type ProductFilterStatus =
    | 'all'
    | 'available'
    | 'unavailable';

export type ProductFavouriteFilter =
    | 'all'
    | 'favourites';

export interface Product {
    id: string;
    name: string;
    categoryId: string | null;
    categoryName: string;
    imageUrl: string | null;
    price: number;
    unit: ProductUnit;
    description?: string;
    barcode?: string;
    available: boolean;
    favourite: boolean;
    createdAt: string;
}

export interface ProductCategory {
    id: string;
    name: string;
    productCount: number;
    active: boolean;
}

export interface ProductSummary {
    totalProducts: number;
    availableProducts: number;
    unavailableProducts: number;
    totalCategories: number;
    favouriteProducts: number;
}

export interface ProductFilterState {
    status: ProductFilterStatus;
    categoryId: string | null;
    favourite: ProductFavouriteFilter;
}

export interface ProductPaginationState {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}
