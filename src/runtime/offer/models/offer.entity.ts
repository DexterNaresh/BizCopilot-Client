export interface OfferEntity {
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
  updated_at?: string | null;
}
