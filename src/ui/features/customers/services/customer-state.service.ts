import { Injectable, signal, computed, Inject } from '@angular/core';
import { CustomerApplication } from '@runtime/customer/application/customer.application';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ToastService } from '../../../shared/services/toast.service';

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
  unit: string; 
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
  // State Signals
  readonly customers = signal<Customer[]>([]);
  readonly selectedCustomerId = signal<string | null>(null);
  readonly selectedBillId = signal<string | null>(null);
  readonly searchTerm = signal<string>('');
  readonly statusFilter = signal<'All' | 'Active' | 'Inactive'>('All');
  readonly currentPage = signal<number>(1);
  readonly itemsPerPage = signal<number>(10);
  readonly isAddCustomerModalOpen = signal<boolean>(false);
  readonly editingCustomer = signal<Customer | null>(null);

  constructor(
    @Inject(CustomerApplication) private customerApp: CustomerApplication,
    @Inject(ISessionService) private sessionService: ISessionService,
    private toastService: ToastService
  ) {}

  get currentUserId(): string {
    const user = this.sessionService.getCurrentUser();
    if (!user) throw new Error('No active session');
    return user.id;
  }

  loadCustomers() {
    const response = this.customerApp.searchCustomers({ userId: this.currentUserId, query: '' });
    if (response.success && response.data) {
      const mapped = response.data
        .filter(c => c.is_system === 0) // Hide Walk-In customer from this list
        .map((c, index) => ({
          id: c.customer_id,
          seqNo: index + 1,
          name: c.name,
          phone: c.phone,
          billsCount: 0, // Placeholder until report aggregation
          totalSpent: 0, // Placeholder until report aggregation
          lastVisit: new Date(c.created_at),
          isActive: c.status !== 'ARCHIVED'
        }));
      this.customers.set(mapped);
    }
  }

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

  readonly selectedBill = computed<Bill | null>(() => {
    return null; // Mock bills removed
  });

  // KPI Computations
  readonly kpiData = computed(() => {
    const all = this.customers();
    const active = all.filter(c => c.isActive).length;
    const now = new Date();
    
    const newThisMonth = all.filter(c => c.lastVisit.getMonth() === now.getMonth() && c.lastVisit.getFullYear() === now.getFullYear()).length; 

    return {
      totalCustomers: all.length,
      activeCustomers: active,
      newThisMonth: newThisMonth
    };
  });

  // Actions
  updateSearch(term: string) {
    this.searchTerm.set(term);
    this.currentPage.set(1);
  }

  updateFilter(filter: 'All' | 'Active' | 'Inactive') {
    this.statusFilter.set(filter);
    this.currentPage.set(1);
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
    const customer = this.customers().find(c => c.id === id);
    if (!customer) return;

    if (customer.isActive) {
      this.deactivateCustomer(id);
    } else {
      this.toastService.info('Reactivation is not supported yet.');
    }
  }

  deactivateCustomer(id: string) {
    const response = this.customerApp.archiveCustomer({ userId: this.currentUserId, customer_id: id });
    if (response.success) {
      this.toastService.success('Customer deactivated');
      this.loadCustomers();
    } else {
      this.toastService.error(response.error?.message || 'Failed to deactivate customer');
    }
  }

  selectBill(id: string) {
    this.selectedBillId.set(id);
  }

  clearBillSelection() {
    this.selectedBillId.set(null);
  }

  openAddCustomerModal(customer?: Customer) {
    this.editingCustomer.set(customer || null);
    this.isAddCustomerModalOpen.set(true);
  }

  closeAddCustomerModal() {
    this.isAddCustomerModalOpen.set(false);
    this.editingCustomer.set(null);
  }

  async editCustomer(id: string, name: string, phone: string | null, notes: string | null): Promise<boolean> {
    const response = this.customerApp.updateCustomer({
      userId: this.currentUserId,
      customer_id: id,
      name,
      phone,
      email: null
    });
    
    if (response.success) {
      this.toastService.success('Customer updated');
      this.loadCustomers();
      return true;
    } else {
      this.toastService.error(response.error?.message || 'Failed to update customer');
      return false;
    }
  }

  async addCustomer(name: string, phone: string | null, notes: string | null): Promise<boolean> {
    const response = this.customerApp.createCustomer({
      userId: this.currentUserId,
      name,
      phone,
      email: null
    });

    if (response.success) {
      this.toastService.success('Customer created');
      this.loadCustomers();
      return true;
    } else {
      this.toastService.error(response.error?.message || 'Failed to create customer');
      return false;
    }
  }
}
