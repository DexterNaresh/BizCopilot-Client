export type ProductType = 'QTY' | 'KG' | 'LTR' | 'METER' | 'PACK';

export interface ProductEntity {
  product_id: string;
  product_code?: string;
  name: string;
  type: ProductType;
  price: number;
  category?: string | null;
  barcode?: string | null;
  image?: string | null;
  description?: string | null;
  favourite: number;
  available: number;
  status: 'ACTIVE' | 'ARCHIVED';
  created_at: string;
  updated_at?: string | null;
}
