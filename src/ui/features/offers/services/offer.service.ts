import { Injectable, signal, Inject } from '@angular/core';
import { Offer } from '../models/offer.model';
import { OfferApplication } from '@runtime/offer/application/offer.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ProductApplication } from '@runtime/product/application/product.application';
import { CategoryApplication } from '@runtime/category/application/category.application';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private offersSignal = signal<Offer[]>([]);

  constructor(
    @Inject(OfferApplication) private offerApp: OfferApplication,
    @Inject(ProductApplication) private productApp: ProductApplication,
    @Inject(CategoryApplication) private categoryApp: CategoryApplication,
    @Inject(ISessionService) private sessionService: ISessionService
  ) {
    this.loadOffers();
  }

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    if (!user) throw new Error('No active session');
    return user.id;
  }

  get offers() {
    return this.offersSignal.asReadonly();
  }

  loadOffers() {
    const response = this.offerApp.getAllOffers({ userId: this.currentUserId });
    if (response.success && response.data) {
      const mappedOffers = response.data.map((o, index) => ({
        id: o.offer_id,
        seq: (index + 1).toString().padStart(2, '0'),
        name: o.name,
        description: o.description || '',
        type: o.discount_percentage ? 'Percentage Off' : 'Flat Discount',
        benefit: o.discount_percentage ? `${o.discount_percentage}% off` : `₹${o.discount_flat} off`,
        appliesTo: o.category ? 'Category' : 'Entire Bill',
        appliesToDetails: o.category || '',
        validity: `${o.valid_from ? o.valid_from.split('T')[0] : 'Always'} – ${o.valid_until ? o.valid_until.split('T')[0] : 'Always'}`,
        status: o.status === 'ACTIVE' ? 'Active' : 'Inactive'
      }));
      this.offersSignal.set(mappedOffers as any);
    }
  }

  toggleStatus(offerId: string) {
    const offer = this.offersSignal().find(o => o.id === offerId);
    if (!offer) return;
    
    const newStatus = offer.status === 'Active' ? 'INACTIVE' : 'ACTIVE';
    const response = this.offerApp.changeStatus({
      userId: this.currentUserId,
      offer_id: offerId,
      status: newStatus
    });

    if (response.success) {
      this.loadOffers();
    }
  }

  deleteOffer(offerId: string) {
    // Note: The Application Contract for Offer doesn't define 'Delete', only 'Change Status'.
    // Typically we would archive it, so let's just mark it INACTIVE.
    const response = this.offerApp.changeStatus({
      userId: this.currentUserId,
      offer_id: offerId,
      status: 'ARCHIVED'
    });
    if (response.success) {
      this.loadOffers();
    }
  }

  getProducts() {
    const response = this.productApp.getAllProducts({ userId: this.currentUserId });
    if (response.success && response.data) {
      return response.data.map(p => ({ id: p.product_id, name: p.name, price: p.price }));
    }
    return [];
  }

  getCategories() {
    const response = this.categoryApp.getAllCategories({ userId: this.currentUserId });
    if (response.success && response.data) {
      return response.data.map(c => ({ id: c.name, name: c.name }));
    }
    return [];
  }

  addOffer(offer: Partial<Offer>) {
    const response = this.offerApp.createOffer({
      userId: this.currentUserId,
      name: offer.name || 'Untitled Offer',
      description: offer.description || '',
      category: offer.appliesTo === 'Category' ? offer.appliesToDetails : undefined,
      discount_percentage: offer.type === 'Percentage Off' ? parseFloat(offer.benefit || '0') : null,
      discount_flat: offer.type === 'Flat Discount' ? parseFloat(offer.benefit || '0') : null,
      valid_from: new Date().toISOString(), // Simplified for now
      valid_until: null
    });

    if (response.success) {
      this.loadOffers();
    }
  }
}
