type ProductViewMode = 'grid' | 'table';

type ProductAvailability = 'available' | 'unavailable';

type ProductUnit = 'qty' | 'kg' | 'ltr' | 'meter';

type ProductFilterStatus =
    | 'all'
    | 'available'
    | 'unavailable';

type ProductFavouriteFilter =
    | 'all'
    | 'favourites';

type ToastType =
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'undo';

type ConfirmationVariant =
    | 'danger'
    | 'warning'
    | 'info';

interface Product {
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

interface ProductCategory {
    id: string;
    name: string;
    productCount: number;
    active: boolean;
}

interface ProductSummary {
    totalProducts: number;
    availableProducts: number;
    unavailableProducts: number;
    totalCategories: number;
    favouriteProducts: number;
}

interface ProductFilterState {
    status: ProductFilterStatus;
    categoryId: string | null;
    favourite: ProductFavouriteFilter;
}

interface ProductPaginationState {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

interface ProductPaginationDefaults {
    desktop: number;
    tablet: number;
    mobile: number;
}

interface ProductFormData {
    id?: string;
    name: string;
    categoryId: string | null;
    price: number | null;
    unit: ProductUnit;
    description: string;
    barcode: string;
    imageUrl: string | null;
}

interface ProductFormValidationState {
    name: string | null;
    categoryId: string | null;
    price: string | null;
    unit: string | null;
    description: string | null;
    barcode: string | null;
}

interface ProductFormState {
    mode: 'add' | 'edit';
    data: ProductFormData;
    validation: ProductFormValidationState;
    isSubmitting: boolean;
    isDirty: boolean;
}

interface ProductFilterPanelState {
    isOpen: boolean;
    draft: ProductFilterState;
}

interface ProductDeleteState {
    isOpen: boolean;
    product: Product | null;
    isDeleting: boolean;
}

interface ProductToastState {
    visible: boolean;
    type: ToastType;
    title: string;
    message?: string;
    actionLabel?: string;
    duration: number;
}

interface ProductScreenState {
    products: Product[];
    filteredProducts: Product[];
    categories: ProductCategory[];
    summary: ProductSummary;

    searchQuery: string;

    filters: ProductFilterState;
    filterPanel: ProductFilterPanelState;

    viewMode: ProductViewMode;

    pagination: ProductPaginationState;
    paginationDefaults: ProductPaginationDefaults;

    productForm: ProductFormState | null;
    deleteState: ProductDeleteState;

    toast: ProductToastState | null;

    isLoading: boolean;
    errorMessage: string | null;
}

interface ProductPageSizeOption {
    value: number;
    label: string;
}

interface ProductPaginationModel {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    startItem: number;
    endItem: number;
    pageNumbers: Array<number | 'ellipsis'>;
}

interface ProductFilterOption {
    id: string;
    label: string;
    count?: number;
}

interface ProductActionContext {
    productId: string;
}

interface ProductTableRow {
    sequenceNumber: number;
    product: Product;
}

interface ProductGridItem {
    product: Product;
}

interface ProductScreenActions {
    openAddProduct(): void;
    openEditProduct(productId: string): void;
    closeProductForm(): void;
    saveProduct(): void;

    openDeleteConfirmation(productId: string): void;
    closeDeleteConfirmation(): void;
    confirmDeleteProduct(): void;

    onSearchChange(query: string): void;
    clearSearch(): void;

    openFilterPanel(): void;
    closeFilterPanel(): void;
    applyFilters(filters: ProductFilterState): void;
    resetFilters(): void;

    selectStatusFilter(status: ProductFilterStatus): void;
    selectCategoryFilter(categoryId: string | null): void;
    selectFavouriteFilter(filter: ProductFavouriteFilter): void;

    selectGridView(): void;
    selectTableView(): void;

    toggleProductAvailability(productId: string): void;
    toggleProductFavourite(productId: string): void;

    onPageChange(page: number): void;
    goToPreviousPage(): void;
    goToNextPage(): void;
    goToFirstPage(): void;
    goToLastPage(): void;

    onPageSizeChange(pageSize: number): void;

    closeToast(): void;
    undoLastAction(): void;
}

interface ProductScreenStateProperties {
    state: ProductScreenState;

    products: Product[];
    filteredProducts: Product[];
    categories: ProductCategory[];
    summary: ProductSummary;

    searchQuery: string;

    activeStatusFilter: ProductFilterStatus;
    activeCategoryFilter: string | null;
    activeFavouriteFilter: ProductFavouriteFilter;

    isFilterPanelOpen: boolean;
    draftFilters: ProductFilterState;

    selectedView: ProductViewMode;

    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;

    paginationModel: ProductPaginationModel;

    isProductFormOpen: boolean;
    productFormMode: 'add' | 'edit';
    selectedProduct: Product | null;
    productFormData: ProductFormData;
    productFormValidation: ProductFormValidationState;
    isProductSubmitting: boolean;

    isDeleteConfirmationOpen: boolean;
    productPendingDeletion: Product | null;
    isDeletingProduct: boolean;

    toast: ProductToastState | null;

    isLoading: boolean;
    errorMessage: string | null;
}

// Header
// Triggered when the user clicks "+ Add Product".
function openAddProduct(): void;

// Triggered when the user clicks the close icon on the Add/Edit Product overlay.
function closeProductForm(): void;

// Search
// Triggered whenever the user types in the product search field.
function onSearchChange(query: string): void;

// Triggered when the user clears the product search input.
function clearSearch(): void;

// Filters
// Triggered when the user clicks the "Filters" control beside Search.
function openFilterPanel(): void;

// Triggered when the user closes the Filters popover/sheet.
function closeFilterPanel(): void;

// Triggered when the user applies the selected filter values.
function applyFilters(filters: ProductFilterState): void;

// Triggered when the user clicks "Reset/Clear Filters".
function resetFilters(): void;

// Triggered when the user selects "All Products".
function selectAllProducts(): void;

// Triggered when the user selects the "Available" quick filter.
function selectAvailableProducts(): void;

// Triggered when the user selects the "Unavailable" quick filter.
function selectUnavailableProducts(): void;

// Triggered when the user selects the "Favourites" quick filter.
function selectFavouriteProducts(): void;

// Triggered when the user selects a category inside the Filters panel.
function selectCategoryFilter(categoryId: string | null): void;

// Triggered when the user changes the availability filter inside the Filters panel.
function selectStatusFilter(status: ProductFilterStatus): void;

// Triggered when the user changes the favourite filter inside the Filters panel.
function selectFavouriteFilter(filter: ProductFavouriteFilter): void;

// View switcher
// Triggered when the user clicks "Grid View".
function selectGridView(): void;

// Triggered when the user clicks "Table View".
function selectTableView(): void;

// Product card
// Triggered when the user clicks the Favourite star on a Product card.
function toggleProductFavourite(productId: string): void;

// Triggered when the user clicks the Availability toggle on a Product card.
function toggleProductAvailability(productId: string): void;

// Triggered when the user clicks Edit on a Product card.
function openEditProduct(productId: string): void;

// Triggered when the user clicks Delete on a Product card.
function openDeleteConfirmation(productId: string): void;

// Product table
// Triggered when the user clicks Favourite in a Product table row.
function toggleTableProductFavourite(productId: string): void;

// Triggered when the user clicks the Availability toggle in a Product table row.
function toggleTableProductAvailability(productId: string): void;

// Triggered when the user clicks Edit in a Product table row.
function editTableProduct(productId: string): void;

// Triggered when the user clicks Delete in a Product table row.
function deleteTableProduct(productId: string): void;

// Add/Edit Product
// Triggered when the user changes Product Name.
function onProductNameChange(value: string): void;

// Triggered when the user changes the Product Category.
function onProductCategoryChange(categoryId: string | null): void;

// Triggered when the user changes Type/Unit.
function onProductUnitChange(unit: ProductUnit): void;

// Triggered when the user changes Selling Price.
function onProductPriceChange(value: number | null): void;

// Triggered when the user changes Description.
function onProductDescriptionChange(value: string): void;

// Triggered when the user changes Barcode.
function onProductBarcodeChange(value: string): void;

// Triggered when the user selects an image.
function onProductImageSelect(imageUrl: string): void;

// Triggered when the user replaces an existing product image.
function replaceProductImage(imageUrl: string): void;

// Triggered when the user removes the selected product image.
function removeProductImage(): void;

// Triggered when the user clicks Save in Add Product mode.
function saveProduct(): void;

// Triggered when the user clicks Save Changes in Edit Product mode.
function saveProductChanges(): void;

// Triggered when the Product form is submitted.
function submitProductForm(): void;

// Triggered when Product form validation is required.
function validateProductForm(): ProductFormValidationState;

// Triggered when the user attempts to save an invalid Product form.
function handleProductValidationError(): void;

// Delete confirmation
// Triggered when the user clicks Cancel in the Delete confirmation dialog.
function closeDeleteConfirmation(): void;

// Triggered when the user clicks "Delete Product" in the confirmation dialog.
function confirmDeleteProduct(): void;

// Triggered when the delete operation enters its loading state.
function setDeleteLoading(isDeleting: boolean): void;

// Pagination
// Triggered when the user selects a different page number.
function onPageChange(page: number): void;

// Triggered when the user clicks Previous.
function goToPreviousPage(): void;

// Triggered when the user clicks Next.
function goToNextPage(): void;

// Triggered when the user clicks the first page.
function goToFirstPage(): void;

// Triggered when the user clicks the last page.
function goToLastPage(): void;

// Triggered when the user changes "Rows per page".
function onPageSizeChange(pageSize: number): void;

// Triggered when page size changes and pagination must be recalculated.
function recalculatePagination(): void;

// Triggered when a page-size change requires returning to page 1.
function resetPaginationToFirstPage(): void;

// Triggered when search/filter results change and the current page is no longer valid.
function ensureValidCurrentPage(): void;

// Responsive defaults
// Triggered when the Product screen determines the initial page size for the viewport.
function resolveDefaultPageSize(viewportWidth: number): number;

// Triggered when the viewport changes and responsive pagination behavior must be recalculated.
function onViewportResize(viewportWidth: number): void;

// Grid scrolling
// Triggered when the selected Grid page size exceeds the default viewport capacity.
function enableGridOverflowIfRequired(): void;

// Triggered when the selected Grid page size returns to a size that fits without internal scrolling.
function disableGridOverflowIfNotRequired(): void;

// Table scrolling
// Triggered when the selected Table page size requires the table body to scroll.
function enableTableBodyScrollIfRequired(): void;

// Triggered when the selected Table page size fits without internal scrolling.
function disableTableBodyScrollIfNotRequired(): void;

// Keeps the table header fixed while only the table body scrolls.
function preserveTableHeaderPosition(): void;

// Toast
// Triggered after a Product is successfully created.
function showProductCreatedToast(): void;

// Triggered after a Product is successfully updated.
function showProductUpdatedToast(): void;

// Triggered after a Product is successfully deleted.
function showProductDeletedToast(): void;

// Triggered after Product availability is changed successfully.
function showAvailabilityUpdatedToast(productId: string): void;

// Triggered after Product favourite state is changed successfully.
function showFavouriteUpdatedToast(productId: string): void;

// Triggered when an error occurs during a Product action.
function showProductErrorToast(message: string): void;

// Triggered when the user clicks the Toast close button.
function closeToast(): void;

// Triggered when the user clicks Undo on an undo-enabled Toast.
function undoLastAction(): void;

// Empty/error/loading states
// Triggered when Product data is being loaded.
function setLoading(isLoading: boolean): void;

// Triggered when Product loading/action fails.
function setError(message: string | null): void;

// Derived state
function getFilteredProducts(): Product[];

function getPaginatedProducts(): Product[];

function getProductTableRows(): ProductTableRow[];

function getProductGridItems(): ProductGridItem[];

function getPaginationModel(): ProductPaginationModel;

function getTotalFilteredProducts(): number;

function getTotalPages(): number;

function getAvailableProductCount(): number;

function getUnavailableProductCount(): number;

function getFavouriteProductCount(): number;

// Product lookup
function getProductById(productId: string): Product | null;

function getCategoryById(categoryId: string): ProductCategory | null;

// State reset
function resetProductForm(): void;

function resetProductScreenState(): void;