export interface OfferCreateRequest { userId: string; sessionId?: string; name: string; description?: any; category?: any; discount_percentage?: any; discount_flat?: any; valid_from?: any; valid_until?: any; }
export interface OfferUpdateRequest { userId: string; sessionId?: string; offer_id: string; name: string; description?: any; category?: any; discount_percentage?: any; discount_flat?: any; valid_from?: any; valid_until?: any; }
export interface OfferStatusRequest { userId: string; sessionId?: string; offer_id: string; status: 'ACTIVE' | 'ARCHIVED' | 'INACTIVE'; }
export interface OfferResult { description: string; discount_amount: number; }

export interface OfferInfo {
  offer_id: string;
  name: string;
  description?: string | null;
  category?: string | null;
  discount_percentage?: number | null;
  discount_flat?: number | null;
  valid_from?: string | null;
  valid_until?: string | null;
  status: 'ACTIVE' | 'ARCHIVED' | 'INACTIVE';
  created_at: string;
}
