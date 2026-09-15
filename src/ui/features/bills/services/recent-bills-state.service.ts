import { Injectable, computed, signal } from '@angular/core';

export type DateFilterOption = 'Today' | 'Yesterday' | 'This Week' | 'This Month' | 'Last Month' | 'Custom';
export type PaymentMethodFilter = 'All' | 'Cash' | 'UPI' | 'Card' | 'Mixed';
export type CustomerTypeFilter = 'All' | 'WalkIn' | 'Named';
export type BilledByFilter = 'All' | 'Owner' | 'Waiter';

export interface AdvancedFilterState {
  paymentMethod: PaymentMethodFilter;
  customerType: CustomerTypeFilter;
  billedBy: BilledByFilter;
  minAmount: number | null;
  maxAmount: number | null;
}

export interface BillItem {
  id: string;
  name: string;
  quantity: number;
  unit: 'Qty' | 'Kg' | 'g' | 'Ltr' | 'ml';
  rate: number;
  total: number;
}

export interface PaymentDetails {
  method: 'Cash' | 'UPI' | 'Card' | 'Mixed';
  amount: number;
  cashAmount?: number;
  upiAmount?: number;
  cardAmount?: number;
  transactionId?: string;
  note?: string;
  date: Date;
}

export interface RecentBill {
  id: string;
  billNumber: string;
  isPaid: boolean;
  customerName: string;
  isWalkIn: boolean;
  phone?: string;
  date: Date;
  billType: string;
  items: BillItem[];
  subtotal: number;
  discountName?: string;
  discountAmount?: number;
  cgst?: number;
  sgst?: number;
  totalPaid: number;
  paymentDetails: PaymentDetails;
}

@Injectable({
  providedIn: 'root'
})
export class RecentBillsStateService {
  // State Signals
  private _bills = signal<RecentBill[]>([]);
  private _selectedBillId = signal<string | null>(null);
  private _searchQuery = signal<string>('');

  // Date Filter Signals
  private _dateOption = signal<DateFilterOption>('Today');
  private _customFromDate = signal<string>('');
  private _customToDate = signal<string>('');

  // Advanced Filter Signals
  private _filters = signal<AdvancedFilterState>({
    paymentMethod: 'All',
    customerType: 'All',
    billedBy: 'All',
    minAmount: null,
    maxAmount: null
  });

  // Readonly Signals
  readonly bills = this._bills.asReadonly();
  readonly selectedBillId = this._selectedBillId.asReadonly();
  readonly searchQuery = this._searchQuery.asReadonly();
  readonly dateOption = this._dateOption.asReadonly();
  readonly customFromDate = this._customFromDate.asReadonly();
  readonly customToDate = this._customToDate.asReadonly();
  readonly filters = this._filters.asReadonly();

  // Active Filter Count Badge
  readonly activeFilterCount = computed(() => {
    const f = this._filters();
    let count = 0;
    if (f.paymentMethod !== 'All') count++;
    if (f.customerType !== 'All') count++;
    if (f.billedBy !== 'All') count++;
    if (f.minAmount !== null || f.maxAmount !== null) count++;
    return count;
  });

  readonly filteredBills = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const filters = this._filters();

    return this.bills().filter(b => {
      // 1. Search Query Filter
      if (query) {
        const matchSearch = b.billNumber.toLowerCase().includes(query) ||
          b.customerName.toLowerCase().includes(query) ||
          (b.phone && b.phone.includes(query));
        if (!matchSearch) return false;
      }

      // 2. Date Range Filter
      if (!this.isDateInRange(b.date)) return false;

      // 3. Payment Method Filter
      if (filters.paymentMethod !== 'All') {
        if (b.paymentDetails.method !== filters.paymentMethod) return false;
      }

      // 4. Customer Type Filter
      if (filters.customerType === 'WalkIn' && !b.isWalkIn) return false;
      if (filters.customerType === 'Named' && b.isWalkIn) return false;

      // 5. Billed By Filter
      if (filters.billedBy !== 'All') {
        if (filters.billedBy === 'Owner' && b.billType !== 'Retail Sale') return false;
        if (filters.billedBy === 'Waiter' && b.billType !== 'Dine-In') return false;
      }

      // 6. Bill Amount Filter
      if (filters.minAmount !== null && b.totalPaid < filters.minAmount) return false;
      if (filters.maxAmount !== null && b.totalPaid > filters.maxAmount) return false;

      return true;
    });
  });

  readonly selectedBill = computed(() => {
    const id = this.selectedBillId();
    if (!id) return null;
    return this.bills().find(b => b.id === id) || null;
  });

  constructor() {
    this.seedMockData();
  }

  // Actions
  selectBill(id: string | null) {
    this._selectedBillId.set(id);
  }

  setSearchQuery(query: string) {
    this._searchQuery.set(query);
  }

  setDateOption(option: DateFilterOption, fromDate?: string, toDate?: string) {
    this._dateOption.set(option);
    if (fromDate !== undefined) this._customFromDate.set(fromDate);
    if (toDate !== undefined) this._customToDate.set(toDate);
  }

  setFilters(filters: AdvancedFilterState) {
    this._filters.set({ ...filters });
  }

  resetFilters() {
    this._filters.set({
      paymentMethod: 'All',
      customerType: 'All',
      billedBy: 'All',
      minAmount: null,
      maxAmount: null
    });
  }

  private isDateInRange(date: Date): boolean {
    const option = this._dateOption();
    const now = new Date();

    const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
    const endOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);

    const time = date.getTime();

    if (option === 'Today') {
      return time >= startOfDay(now).getTime() && time <= endOfDay(now).getTime();
    }
    if (option === 'Yesterday') {
      const y = new Date(now);
      y.setDate(y.getDate() - 1);
      return time >= startOfDay(y).getTime() && time <= endOfDay(y).getTime();
    }
    if (option === 'This Week') {
      const startOfWeek = new Date(now);
      const day = startOfWeek.getDay();
      const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // Monday
      startOfWeek.setDate(diff);
      return time >= startOfDay(startOfWeek).getTime() && time <= endOfDay(now).getTime();
    }
    if (option === 'This Month') {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      return time >= startOfDay(startOfMonth).getTime() && time <= endOfDay(now).getTime();
    }
    if (option === 'Last Month') {
      const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
      return time >= startOfLastMonth.getTime() && time <= endOfLastMonth.getTime();
    }
    if (option === 'Custom') {
      const fromStr = this._customFromDate();
      const toStr = this._customToDate();
      let valid = true;
      if (fromStr) {
        const from = new Date(fromStr);
        if (time < startOfDay(from).getTime()) valid = false;
      }
      if (toStr) {
        const to = new Date(toStr);
        if (time > endOfDay(to).getTime()) valid = false;
      }
      return valid;
    }
    return true;
  }

  private seedMockData() {
    const now = new Date();
    const todayAt = (h: number, m: number) => new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
    const yesterdayAt = (h: number, m: number) => new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, h, m);
    const thisWeekAt = (h: number, m: number) => new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3, h, m);
    const lastMonthAt = (h: number, m: number) => new Date(now.getFullYear(), now.getMonth() - 1, 15, h, m);

    const mockBills: RecentBill[] = [
      {
        id: '1',
        billNumber: '#B-1048',
        isPaid: true,
        customerName: 'Ravi Kumar',
        isWalkIn: false,
        phone: '98765 43210',
        date: todayAt(14, 42),
        billType: 'Retail Sale',
        items: [
          { id: 'i1', name: 'Orange Juice', quantity: 1, unit: 'Ltr', rate: 120, total: 120 },
          { id: 'i2', name: 'Apple Juice', quantity: 2, unit: 'Ltr', rate: 120, total: 240 },
          { id: 'i3', name: 'Veg Sandwich', quantity: 2, unit: 'Qty', rate: 150, total: 300 }
        ],
        subtotal: 660,
        discountName: 'SUMMER10',
        discountAmount: 50,
        cgst: 16.25,
        sgst: 16.25,
        totalPaid: 776.25,
        paymentDetails: {
          method: 'UPI',
          amount: 776.25,
          transactionId: 'UTR123456789012',
          date: todayAt(14, 42)
        }
      },
      {
        id: '2',
        billNumber: '#B-1047',
        isPaid: true,
        customerName: 'Walk-In Customer',
        isWalkIn: true,
        date: todayAt(14, 31),
        billType: 'Retail Sale',
        items: [
          { id: 'i4', name: 'Cappuccino', quantity: 2, unit: 'Qty', rate: 200, total: 400 },
          { id: 'i5', name: 'Chocolate Muffin', quantity: 1, unit: 'Qty', rate: 150, total: 150 },
          { id: 'i6', name: 'Espresso', quantity: 1, unit: 'Qty', rate: 120, total: 120 },
          { id: 'i7', name: 'Croissant', quantity: 2, unit: 'Qty', rate: 150, total: 300 },
          { id: 'i8', name: 'Water Bottle', quantity: 1, unit: 'Qty', rate: 50, total: 50 }
        ],
        subtotal: 1020,
        cgst: 110,
        sgst: 110,
        totalPaid: 1240.00,
        paymentDetails: {
          method: 'Cash',
          amount: 1240.00,
          date: todayAt(14, 31)
        }
      },
      {
        id: '3',
        billNumber: '#B-1046',
        isPaid: true,
        customerName: 'Ramesh Mehta',
        isWalkIn: false,
        phone: '98765 11223',
        date: yesterdayAt(13, 58),
        billType: 'Dine-In',
        items: [
          { id: 'i9', name: 'Chicken Burger', quantity: 2, unit: 'Qty', rate: 250, total: 500 },
          { id: 'i10', name: 'Fries', quantity: 2, unit: 'Qty', rate: 100, total: 200 },
          { id: 'i11', name: 'Coke', quantity: 2, unit: 'Qty', rate: 50, total: 100 },
          { id: 'i12', name: 'Ice Cream', quantity: 1, unit: 'Qty', rate: 95, total: 95 }
        ],
        subtotal: 895,
        totalPaid: 895.00,
        paymentDetails: {
          method: 'Card',
          amount: 895.00,
          transactionId: 'TXN0987654321',
          date: yesterdayAt(13, 58)
        }
      },
      {
        id: '4',
        billNumber: '#B-1045',
        isPaid: true,
        customerName: 'Sneha Patel',
        isWalkIn: false,
        phone: '98765 33445',
        date: thisWeekAt(11, 20),
        billType: 'Retail Sale',
        items: [
          { id: 'i13', name: 'Mocha', quantity: 1, unit: 'Qty', rate: 250, total: 250 },
          { id: 'i14', name: 'Blueberry Cheesecake', quantity: 1, unit: 'Qty', rate: 200.75, total: 200.75 }
        ],
        subtotal: 450.75,
        totalPaid: 450.75,
        paymentDetails: {
          method: 'Mixed',
          amount: 450.75,
          cashAmount: 200,
          upiAmount: 250.75,
          note: 'Customer paid remaining amount through UPI',
          date: thisWeekAt(11, 20)
        }
      },
      {
        id: '5',
        billNumber: '#B-1044',
        isPaid: true,
        customerName: 'Vikram Singh',
        isWalkIn: false,
        phone: '98765 77889',
        date: lastMonthAt(10, 15),
        billType: 'Dine-In',
        items: [
          { id: 'i15', name: 'Cold Coffee', quantity: 2, unit: 'Qty', rate: 160, total: 320 }
        ],
        subtotal: 320,
        totalPaid: 320.00,
        paymentDetails: {
          method: 'UPI',
          amount: 320.00,
          date: lastMonthAt(10, 15)
        }
      }
    ];

    // Additional mock bills
    for (let i = 6; i <= 25; i++) {
      const isToday = i % 2 === 0;
      const baseDate = isToday ? todayAt(10 + (i % 8), 15) : yesterdayAt(9 + (i % 6), 30);
      mockBills.push({
        ...mockBills[i % 4],
        id: i.toString(),
        billNumber: `#B-${1045 - (i - 4)}`,
        date: baseDate
      });
    }

    this._bills.set(mockBills);
  }
}
