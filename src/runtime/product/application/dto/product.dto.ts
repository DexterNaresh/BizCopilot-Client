import { ProductType } from '../../models/product.entity';

export interface ProductCreateRequest { userId: string; sessionId?: string; name: string; type: ProductType; price: number; category?: any; barcode?: any; image_url?: string | null; }
export interface ProductUpdateRequest { userId: string; sessionId?: string; product_id: string; name: string; type: ProductType; price: number; category?: any; barcode?: any; image_url?: string | null; }
export interface ProductArchiveRequest { userId: string; sessionId?: string; product_id: string; }
export interface ProductAvailabilityRequest { userId: string; sessionId?: string; product_id: string; available?: any; }

export interface ProductInfo {
  product_id: string;
  product_code?: string;
  name: string;
  type: ProductType;
  price: number;
  category?: string | null;
  barcode?: string | null;
  available: number;
  status: 'ACTIVE' | 'ARCHIVED';
  image_url?: string | null;
  created_at: string;
}
