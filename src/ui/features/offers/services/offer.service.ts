import { Injectable, signal } from '@angular/core';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private initialOffers: Offer[] = [
    {
      id: '1',
      seq: '01',
      name: 'Juice Fest 20%',
      description: 'Get 20% off on all juices',
      type: 'Percentage Off',
      benefit: '20% off (Max ₹200)',
      appliesTo: 'Category',
      appliesToDetails: 'Juices',
      validity: '01 Sep 2026 – 30 Sep 2026',
      status: 'Active'
    },
    {
      id: '2',
      seq: '02',
      name: 'Breakfast Combo',
      description: 'Juice + Sandwich Combo',
      type: 'Bundle / Combo',
      benefit: '₹120',
      appliesTo: 'Selected Products',
      appliesToDetails: 'Juice, Sandwich',
      validity: '01 Sep 2026 – 30 Sep 2026',
      status: 'Active'
    },
    {
      id: '3',
      seq: '03',
      name: 'Weekend Special',
      description: 'Flat ₹50 off on minimum bill of ₹500',
      type: 'Flat Discount',
      benefit: '₹50 off (Min ₹500)',
      appliesTo: 'Entire Bill',
      validity: 'Weekends only',
      status: 'Inactive'
    }
  ];

  private offersSignal = signal<Offer[]>(this.initialOffers);

  get offers() {
    return this.offersSignal.asReadonly();
  }

  toggleStatus(offerId: string) {
    this.offersSignal.update(offers => 
      offers.map(o => o.id === offerId 
        ? { ...o, status: o.status === 'Active' ? 'Inactive' : 'Active' } 
        : o
      )
    );
  }

  deleteOffer(offerId: string) {
    this.offersSignal.update(offers => offers.filter(o => o.id !== offerId));
  }

  // Mock Data for Create Offer UI
  private mockProducts = [
    { id: 'p1', name: 'Apple Juice', price: 120 },
    { id: 'p2', name: 'Orange Juice', price: 100 },
    { id: 'p3', name: 'Mango Juice', price: 150 },
    { id: 'p4', name: 'Sandwich', price: 80 }
  ];

  private mockCategories = [
    { id: 'c1', name: 'Beverages' },
    { id: 'c2', name: 'Fresh Juices' },
    { id: 'c3', name: 'Snacks' },
    { id: 'c4', name: 'Desserts' },
    { id: 'c5', name: 'Combos' },
    { id: 'c6', name: 'Others' }
  ];

  getProducts() {
    return this.mockProducts;
  }

  getCategories() {
    return this.mockCategories;
  }

  addOffer(offer: Partial<Offer>) {
    const nextId = (this.offersSignal().length + 1).toString();
    const nextSeq = nextId.padStart(2, '0');
    const newOffer: Offer = {
      id: nextId,
      seq: nextSeq,
      name: offer.name || 'Untitled Offer',
      description: offer.description || '',
      type: offer.type || 'Percentage Off',
      benefit: offer.benefit || 'Custom Offer',
      appliesTo: offer.appliesTo || 'Entire Bill',
      appliesToDetails: offer.appliesToDetails || '',
      validity: offer.validity || 'Valid',
      status: 'Active'
    };

    this.offersSignal.update(offers => [newOffer, ...offers]);
  }
}

