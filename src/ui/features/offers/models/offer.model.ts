export type OfferType = 'Percentage Off' | 'Flat Discount' | 'Buy X Get Y' | 'Quantity Discount' | 'Spend & Save' | 'Tiered Offer' | 'Bundle / Combo';
export type OfferScope = 'Entire Bill' | 'Selected Products' | 'Category';
export type OfferStatus = 'Active' | 'Inactive';

export interface Offer {
  id: string;
  seq: string;
  name: string;
  description: string;
  type: OfferType;
  benefit: string;
  appliesTo: OfferScope;
  appliesToDetails?: string;
  validity: string;
  status: OfferStatus;
}
