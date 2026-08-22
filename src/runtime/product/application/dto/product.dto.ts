import { ProductType } from '../../models/product.entity';

export interface ProductCreateRequest { userId: string; sessionId?: string; name: string; type: ProductType; price: number; category?: any; barcode?: any; }
export interface ProductUpdateRequest { userId: string; sessionId?: string; product_id: string; name: string; type: ProductType; price: number; category?: any; barcode?: any; }
export interface ProductArchiveRequest { userId: string; sessionId?: string; product_id: string; }
export interface ProductAvailabilityRequest { userId: string; sessionId?: string; product_id: string; available?: any; }
export interface ProductFavouriteRequest { userId: string; sessionId?: string; product_id: string; favourite: boolean; }

export interface ProductInfo {
  product_id: string;
  product_code?: string;
  name: string;
  type: ProductType;
  price: number;
  category?: string | null;
  barcode?: string | null;
  image?: string | null;
  description?: string | null;
  favourite: boolean;
  available: number;
  status: 'ACTIVE' | 'ARCHIVED';
  created_at: string;
}
