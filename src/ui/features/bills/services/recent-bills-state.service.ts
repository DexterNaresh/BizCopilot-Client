import { Injectable, computed, signal } from '@angular/core';

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

  // Computed Values
  readonly bills = this._bills.asReadonly();
  readonly selectedBillId = this._selectedBillId.asReadonly();
  readonly searchQuery = this._searchQuery.asReadonly();
  
  readonly filteredBills = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.bills();
    return this.bills().filter(b => 
      b.billNumber.toLowerCase().includes(query) ||
      b.customerName.toLowerCase().includes(query) ||
      (b.phone && b.phone.includes(query))
    );
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

  private seedMockData() {
    const mockBills: RecentBill[] = [
      {
        id: '1',
        billNumber: '#B-1048',
        isPaid: true,
        customerName: 'Ravi Kumar',
        isWalkIn: false,
        phone: '98765 43210',
        date: new Date('2024-05-31T14:42:00'),
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
          date: new Date('2024-05-31T14:42:00')
        }
      },
      {
        id: '2',
        billNumber: '#B-1047',
        isPaid: true,
        customerName: 'Walk-In Customer',
        isWalkIn: true,
        date: new Date('2024-05-31T14:31:00'),
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
          date: new Date('2024-05-31T14:31:00')
        }
      },
      {
        id: '3',
        billNumber: '#B-1046',
        isPaid: true,
        customerName: 'Ramesh Mehta',
        isWalkIn: false,
        phone: '98765 11223',
        date: new Date('2024-05-31T13:58:00'),
        billType: 'Retail Sale',
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
          date: new Date('2024-05-31T13:58:00')
        }
      },
      {
        id: '4',
        billNumber: '#B-1045',
        isPaid: true,
        customerName: 'Sneha Patel',
        isWalkIn: false,
        phone: '98765 33445',
        date: new Date('2024-05-31T13:21:00'),
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
          date: new Date('2024-05-31T13:21:00')
        }
      }
    ];

    // Duplicate a few to show scrolling in list
    for (let i = 5; i <= 32; i++) {
      mockBills.push({
        ...mockBills[i % 4],
        id: i.toString(),
        billNumber: `#B-${1045 - (i - 4)}`,
        date: new Date(new Date('2024-05-31T13:21:00').getTime() - (i * 1000 * 60 * 15)) // earlier times
      });
    }

    this._bills.set(mockBills);
  }
}
