import { Injectable, signal, computed } from '@angular/core';

export interface Customer {
  id: string;
  seqNo: number;
  name: string;
  phone: string | null;
  billsCount: number;
  totalSpent: number;
  lastVisit: Date;
  isActive: boolean;
}

export interface BillItem {
  seqNo: number;
  name: string;
  quantity: number;
  unit: string; // 'Qty', 'Kg', 'L', 'Pkt'
  unitPrice: number;
  total: number;
}

export interface Bill {
  id: string;
  billNumber: string;
  customerId: string;
  status: 'Completed' | 'Cancelled' | 'Voided' | 'Refunded';
  date: Date;
  items: BillItem[];
  subtotal: number;
  discount: number;
  offer: number;
  tax: number;
  total: number;
  paymentMethod: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerStateService {
  // Mock Indian POS Data
  private mockCustomers: Customer[] = [
    { id: 'c1', seqNo: 1, name: 'Arun Kumar', phone: '+91 98765 43210', billsCount: 12, totalSpent: 8450, lastVisit: new Date('2026-08-18T10:30:00'), isActive: true },
    { id: 'c2', seqNo: 2, name: 'Priya Stores', phone: '+91 98452 11890', billsCount: 8, totalSpent: 5720, lastVisit: new Date('2026-08-16T14:15:00'), isActive: true },
    { id: 'c3', seqNo: 3, name: 'Ravi', phone: '+91 90031 22441', billsCount: 21, totalSpent: 14280, lastVisit: new Date('2026-08-15T09:45:00'), isActive: true },
    { id: 'c4', seqNo: 4, name: 'Meena', phone: '+91 98840 55321', billsCount: 5, totalSpent: 2150, lastVisit: new Date('2026-08-12T16:20:00'), isActive: false },
    { id: 'c5', seqNo: 5, name: 'Karthik', phone: '+91 87541 23698', billsCount: 2, totalSpent: 980, lastVisit: new Date('2026-08-10T11:00:00'), isActive: true },
    { id: 'c6', seqNo: 6, name: 'Lakshmi Traders', phone: '+91 99401 55677', billsCount: 34, totalSpent: 28450, lastVisit: new Date('2026-08-09T17:30:00'), isActive: true },
    { id: 'c7', seqNo: 7, name: 'Sanjay', phone: '+91 91763 88421', billsCount: 1, totalSpent: 450, lastVisit: new Date('2026-08-05T12:15:00'), isActive: true },
    { id: 'c8', seqNo: 8, name: 'Deepa', phone: null, billsCount: 4, totalSpent: 1800, lastVisit: new Date('2026-08-01T15:40:00'), isActive: true },
    { id: 'c9', seqNo: 9, name: 'Rajesh', phone: '+91 80562 11234', billsCount: 9, totalSpent: 6200, lastVisit: new Date('2026-07-28T10:05:00'), isActive: false },
    { id: 'c10', seqNo: 10, name: 'Anitha', phone: '+91 98409 33215', billsCount: 15, totalSpent: 11500, lastVisit: new Date('2026-07-25T14:50:00'), isActive: true },
    { id: 'c11', seqNo: 11, name: 'Kumar', phone: '+91 94440 88765', billsCount: 3, totalSpent: 1250, lastVisit: new Date('2026-07-20T09:30:00'), isActive: true },
    { id: 'c12', seqNo: 12, name: 'Vignesh', phone: '+91 99625 44123', billsCount: 7, totalSpent: 4100, lastVisit: new Date('2026-07-15T16:10:00'), isActive: true },
  ];

  // Mock Bills Data
  private mockBills: Bill[] = [
    {
      id: 'b1',
      billNumber: '#BC-20260818-0042',
      customerId: 'c1',
      status: 'Completed',
      date: new Date('2026-08-18T19:42:00'),
      items: [
        { seqNo: 1, name: 'Basmati Rice', quantity: 2, unit: 'Qty', unitPrice: 120, total: 240 },
        { seqNo: 2, name: 'Sugar', quantity: 1.5, unit: 'Kg', unitPrice: 48, total: 72 },
        { seqNo: 3, name: 'Cooking Oil', quantity: 0.75, unit: 'L', unitPrice: 150, total: 112.5 },
        { seqNo: 4, name: 'Maggi Noodles', quantity: 3, unit: 'Pkt', unitPrice: 35, total: 105 },
        { seqNo: 5, name: 'Soap', quantity: 5, unit: 'Qty', unitPrice: 20, total: 100 },
        { seqNo: 6, name: 'Detergent', quantity: 1, unit: 'Kg', unitPrice: 120, total: 120 },
      ],
      subtotal: 749.50,
      discount: 50.00,
      offer: 20.00,
      tax: 0.00,
      total: 679.50,
      paymentMethod: 'UPI'
    }
  ];

  // State Signals
  readonly customers = signal<Customer[]>(this.mockCustomers);
  readonly selectedCustomerId = signal<string | null>(null);
  readonly selectedBillId = signal<string | null>(null);
  readonly searchTerm = signal<string>('');
  readonly statusFilter = signal<'All' | 'Active' | 'Inactive'>('All');
  readonly currentPage = signal<number>(1);
  readonly itemsPerPage = signal<number>(10);

  // Derived State (Computed)
  readonly filteredCustomers = computed(() => {
    let result = this.customers();

    // 1. Apply Status Filter
    const filter = this.statusFilter();
    if (filter === 'Active') {
      result = result.filter(c => c.isActive);
    } else if (filter === 'Inactive') {
      result = result.filter(c => !c.isActive);
    }

    // 2. Apply Search Filter
    const term = this.searchTerm().toLowerCase().trim();
    if (term) {
      result = result.filter(c => 
        c.name.toLowerCase().includes(term) || 
        (c.phone && c.phone.includes(term))
      );
    }

    return result;
  });

  readonly totalItems = computed(() => this.filteredCustomers().length);
  readonly totalPages = computed(() => Math.ceil(this.totalItems() / this.itemsPerPage()) || 1);

  readonly paginatedCustomers = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
    return this.filteredCustomers().slice(startIndex, startIndex + this.itemsPerPage());
  });

  readonly selectedCustomer = computed(() => {
    const id = this.selectedCustomerId();
    if (!id) return null;
    return this.customers().find(c => c.id === id) || null;
  });

  readonly selectedBill = computed(() => {
    const id = this.selectedBillId();
    if (!id) return null;
    return this.mockBills.find(b => b.id === id) || null;
  });

  // KPI Computations
  readonly kpiData = computed(() => {
    const all = this.customers();
    const active = all.filter(c => c.isActive).length;
    
    // Calculate new customers this month (mock logic: assuming anything in Aug 2026 is recent)
    const newThisMonth = all.filter(c => c.billsCount <= 2 && c.lastVisit.getMonth() === 7).length; 

    return {
      totalCustomers: all.length,
      activeCustomers: active,
      newThisMonth: newThisMonth
    };
  });

  // Actions
  updateSearch(term: string) {
    this.searchTerm.set(term);
    this.currentPage.set(1); // Reset to page 1 on search
  }

  updateFilter(filter: 'All' | 'Active' | 'Inactive') {
    this.statusFilter.set(filter);
    this.currentPage.set(1); // Reset to page 1 on filter
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  setItemsPerPage(count: number) {
    this.itemsPerPage.set(count);
    this.currentPage.set(1);
  }

  selectCustomer(id: string) {
    this.selectedCustomerId.set(id);
  }

  clearSelection() {
    this.selectedCustomerId.set(null);
  }

  toggleCustomerStatus(id: string) {
    this.customers.update(list => 
      list.map(c => c.id === id ? { ...c, isActive: !c.isActive } : c)
    );
  }

  deactivateCustomer(id: string) {
    // In actual implementation, this would show a dialog first.
    // For the service action, it sets isActive to false.
    this.customers.update(list => 
      list.map(c => c.id === id ? { ...c, isActive: false } : c)
    );
  }

  selectBill(id: string) {
    this.selectedBillId.set(id);
  }

  clearBillSelection() {
    this.selectedBillId.set(null);
  }
}
