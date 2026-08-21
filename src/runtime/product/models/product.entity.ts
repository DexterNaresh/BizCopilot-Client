export type ProductType = 'QTY' | 'KG' | 'LTR' | 'METER' | 'PACK';

export interface ProductEntity { 
  product_id: string; 
  product_code?: string; 
  name: string; 
  type?: ProductType;
  description?: string;
  price: number; 
  category?: string | null; 
  barcode?: string | null; 
  available: number; 
  status: 'ACTIVE' | 'ARCHIVED'; 
  created_at: string; 
  updated_at?: string | null; 
}
