export interface ProductViewModel {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  sellingPrice: number;
  image?: string;
  availability: 'available' | 'unavailable';
  favourite: boolean;
  barcode?: string;
  unit: string;
}
