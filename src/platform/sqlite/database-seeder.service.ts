import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseSeederService {
  constructor(
    private dbService: DatabaseService,
    private identityService: IIdentityService
  ) {}

  seed(): void {
    console.log('[DatabaseSeeder] Seeding café demo data...');
    this.seedCategories();
    this.seedProducts();
    this.seedOffers();
    this.seedCustomers();
    this.seedBills();
    this.seedHeldBills();
    console.log('[DatabaseSeeder] Café demo data seeded successfully.');
  }

  private seedCategories() {
    const categories = [
      { name: 'Hot Coffee', icon: 'local_cafe', color: '#FEF3C7' },
      { name: 'Cold Coffee', icon: 'icecream', color: '#E0E7FF' },
      { name: 'Tea & Chai', icon: 'local_drink', color: '#D1FAE5' },
      { name: 'Smoothies & Shakes', icon: 'water_drop', color: '#FFEDD5' },
      { name: 'Pastries', icon: 'bakery_dining', color: '#F3E8FF' },
      { name: 'Sandwiches & Wraps', icon: 'fastfood', color: '#FEF9C3' },
      { name: 'Desserts', icon: 'cake', color: '#FCE7F3' },
      { name: 'Snacks', icon: 'set_meal', color: '#ECFDF5' },
      { name: 'Fresh Juices', icon: 'eco', color: '#FFF7ED' },
      { name: 'Add-ons & Extras', icon: 'local_offer', color: '#F1F5F9' }
    ];

    for (const cat of categories) {
      const id = this.identityService.generateId();

      this.dbService.execute(`
        INSERT OR IGNORE INTO categories (category_id, name, description, icon, color_hint, status, created_at)
        VALUES (?, ?, ?, ?, ?, 'ACTIVE', datetime('now'))
      `, [id, cat.name, null, cat.icon, cat.color]);
    }
  }

  private seedProducts() {
    const testProducts = [
      // ── Hot Coffee ──
      { name: 'Espresso',              type: 'QTY',  price: 120,  category: 'Hot Coffee' },
      { name: 'Americano',             type: 'QTY',  price: 150,  category: 'Hot Coffee' },
      { name: 'Cappuccino',            type: 'QTY',  price: 180,  category: 'Hot Coffee' },
      { name: 'Café Latte',            type: 'QTY',  price: 200,  category: 'Hot Coffee' },
      { name: 'Flat White',            type: 'QTY',  price: 220,  category: 'Hot Coffee' },
      { name: 'Caramel Macchiato',     type: 'QTY',  price: 250,  category: 'Hot Coffee' },
      { name: 'Mocha',                 type: 'QTY',  price: 230,  category: 'Hot Coffee' },

      // ── Cold Coffee ──
      { name: 'Iced Americano',        type: 'QTY',  price: 180,  category: 'Cold Coffee' },
      { name: 'Iced Latte',            type: 'QTY',  price: 220,  category: 'Cold Coffee' },
      { name: 'Cold Brew',             type: 'QTY',  price: 250,  category: 'Cold Coffee' },
      { name: 'Frappe',                type: 'QTY',  price: 260,  category: 'Cold Coffee' },
      { name: 'Iced Mocha',            type: 'QTY',  price: 250,  category: 'Cold Coffee' },
      { name: 'Affogato',              type: 'QTY',  price: 280,  category: 'Cold Coffee' },

      // ── Tea & Chai ──
      { name: 'Masala Chai',           type: 'QTY',  price: 60,   category: 'Tea & Chai' },
      { name: 'Green Tea',             type: 'QTY',  price: 100,  category: 'Tea & Chai' },
      { name: 'Lemon Iced Tea',        type: 'QTY',  price: 120,  category: 'Tea & Chai' },
      { name: 'Matcha Latte',          type: 'QTY',  price: 220,  category: 'Tea & Chai' },
      { name: 'Chamomile Tea',         type: 'QTY',  price: 140,  category: 'Tea & Chai' },

      // ── Smoothies & Shakes ──
      { name: 'Mango Smoothie',        type: 'QTY',  price: 200,  category: 'Smoothies & Shakes' },
      { name: 'Berry Blast Smoothie',  type: 'QTY',  price: 220,  category: 'Smoothies & Shakes' },
      { name: 'Chocolate Milkshake',   type: 'QTY',  price: 180,  category: 'Smoothies & Shakes' },
      { name: 'Oreo Shake',            type: 'QTY',  price: 220,  category: 'Smoothies & Shakes' },
      { name: 'Peanut Butter Shake',   type: 'QTY',  price: 240,  category: 'Smoothies & Shakes' },

      // ── Pastries ──
      { name: 'Butter Croissant',      type: 'QTY',  price: 120,  category: 'Pastries' },
      { name: 'Chocolate Muffin',      type: 'QTY',  price: 100,  category: 'Pastries' },
      { name: 'Blueberry Scone',       type: 'QTY',  price: 130,  category: 'Pastries' },
      { name: 'Cinnamon Roll',         type: 'QTY',  price: 140,  category: 'Pastries' },
      { name: 'Almond Danish',         type: 'QTY',  price: 150,  category: 'Pastries' },
      { name: 'Banana Bread Slice',    type: 'QTY',  price: 90,   category: 'Pastries' },

      // ── Sandwiches & Wraps ──
      { name: 'Grilled Cheese Sandwich',   type: 'QTY',  price: 160,  category: 'Sandwiches & Wraps' },
      { name: 'Chicken Club Sandwich',     type: 'QTY',  price: 220,  category: 'Sandwiches & Wraps' },
      { name: 'Paneer Tikka Wrap',         type: 'QTY',  price: 200,  category: 'Sandwiches & Wraps' },
      { name: 'Egg & Mayo Sandwich',       type: 'QTY',  price: 140,  category: 'Sandwiches & Wraps' },
      { name: 'Veggie Wrap',               type: 'QTY',  price: 180,  category: 'Sandwiches & Wraps' },

      // ── Desserts ──
      { name: 'Chocolate Brownie',     type: 'QTY',  price: 130,  category: 'Desserts' },
      { name: 'Cheesecake Slice',      type: 'QTY',  price: 200,  category: 'Desserts' },
      { name: 'Tiramisu',              type: 'QTY',  price: 250,  category: 'Desserts' },
      { name: 'Red Velvet Cake',       type: 'QTY',  price: 180,  category: 'Desserts' },
      { name: 'Fruit Tart',            type: 'QTY',  price: 170,  category: 'Desserts' },

      // ── Snacks ──
      { name: 'French Fries',          type: 'QTY',  price: 120,  category: 'Snacks' },
      { name: 'Garlic Bread',          type: 'QTY',  price: 100,  category: 'Snacks' },
      { name: 'Nachos with Salsa',     type: 'QTY',  price: 180,  category: 'Snacks' },
      { name: 'Bruschetta',            type: 'QTY',  price: 160,  category: 'Snacks' },

      // ── Fresh Juices ──
      { name: 'Orange Juice',          type: 'QTY',  price: 120,  category: 'Fresh Juices' },
      { name: 'Watermelon Juice',      type: 'QTY',  price: 100,  category: 'Fresh Juices' },
      { name: 'Apple Juice',           type: 'QTY',  price: 130,  category: 'Fresh Juices' },
      { name: 'Pineapple Juice',       type: 'QTY',  price: 120,  category: 'Fresh Juices' },

      // ── Add-ons & Extras ──
      { name: 'Extra Espresso Shot',   type: 'QTY',  price: 50,   category: 'Add-ons & Extras' },
      { name: 'Oat Milk Upgrade',      type: 'QTY',  price: 40,   category: 'Add-ons & Extras' },
      { name: 'Whipped Cream',         type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Caramel Syrup',         type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Hazelnut Syrup',        type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Vanilla Syrup',         type: 'QTY',  price: 30,   category: 'Add-ons & Extras' },
      { name: 'Chocolate Sauce Drizzle', type: 'QTY', price: 25,  category: 'Add-ons & Extras' }
    ];

    let codeSeq = 1;
    for (const p of testProducts) {
      const id = this.identityService.generateId();
      const code = 'PRD-' + codeSeq.toString().padStart(4, '0');
      codeSeq++;

      const isUnavailable = p.name === 'Cold Brew' || p.name === 'Almond Danish' ? 0 : 1;
      this.dbService.execute(`
        INSERT OR IGNORE INTO products (product_id, product_code, name, type, price, category, barcode, available, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, NULL, ?, 'ACTIVE', datetime('now'))
      `, [id, code, p.name, p.type, p.price, p.category, isUnavailable]);
    }

    // Update the sequence
    this.dbService.execute(`UPDATE sequences SET next_value = ? WHERE sequence_name = 'PRODUCT_CODE'`, [codeSeq]);
  }

  private seedOffers() {
    const offers = [
      { name: 'Morning Coffee 10%', category: 'Percentage', discount_percentage: 10, discount_flat: 0 },
      { name: 'Weekend Special', category: 'Flat Amount', discount_percentage: 0, discount_flat: 50 },
      { name: 'Buy 1 Get 1 Bakery', category: 'BOGO', discount_percentage: 100, discount_flat: 0 },
      { name: 'Student Discount', category: 'Percentage', discount_percentage: 15, discount_flat: 0 },
      { name: 'Happy Hour 20%', category: 'Percentage', discount_percentage: 20, discount_flat: 0 },
      { name: 'New Customer Flat ₹50', category: 'Flat Amount', discount_percentage: 0, discount_flat: 50 }
    ];

    for (const offer of offers) {
      const id = this.identityService.generateId();
      this.dbService.execute(`
        INSERT OR IGNORE INTO offers (offer_id, name, category, discount_percentage, discount_flat, status, valid_from, valid_until, created_at)
        VALUES (?, ?, ?, ?, ?, 'ACTIVE', datetime('now', '-30 days'), datetime('now', '+30 days'), datetime('now'))
      `, [id, offer.name, offer.category, offer.discount_percentage, offer.discount_flat]);
    }
  }

  private seedCustomers() {
    const customersCount = this.dbService.query<{count: number}>("SELECT COUNT(*) as count FROM customers WHERE is_system = 0")[0].count;
    if (customersCount > 0) return;

    const testCustomers = [
      { name: 'Arun Kumar', phone: '9876543210' },
      { name: 'Priya Stores', phone: '9845211890' },
      { name: 'Ravi', phone: '9003122441' },
      { name: 'Meena', phone: '9884055321' },
      { name: 'Karthik', phone: '8754123698' },
      { name: 'Lakshmi Traders', phone: '9940155677' },
      { name: 'Sanjay', phone: '9176388421' },
      { name: 'Deepa', phone: '8056211234' },
      { name: 'Anitha', phone: '9840933215' },
      { name: 'Kumar', phone: '9444088765' }
    ];

    for (const c of testCustomers) {
      const id = this.identityService.generateId();
      this.dbService.execute(`
        INSERT OR IGNORE INTO customers (customer_id, name, phone, email, is_system, status, created_at)
        VALUES (?, ?, ?, NULL, 0, 'ACTIVE', datetime('now', '-15 days'))
      `, [id, c.name, c.phone]);
    }
  }

  private seedBills() {
    // Check if bills exist
    const billsCount = this.dbService.query<{count: number}>("SELECT COUNT(*) as count FROM bills")[0].count;
    if (billsCount > 0) return;

    console.log('[DatabaseSeeder] Generating mock bills...');

    // Fetch products to use in bills
    const products = this.dbService.query<{product_id: string, name: string, type: string, price: number}>("SELECT product_id, name, type, price FROM products");
    if (products.length === 0) return;

    // Fetch offers
    const offers = this.dbService.query<{offer_id: string, name: string, category: string, discount_percentage: number, discount_flat: number}>("SELECT offer_id, name, category, discount_percentage, discount_flat FROM offers");

    let billCodeSeq = 1;
    const paymentMethods = ['UPI', 'Cash', 'Card', 'Mixed'];
    const now = new Date();

    // Generate 30 days of data
    for (let dayOffset = 30; dayOffset >= 0; dayOffset--) {
      const date = new Date(now);
      date.setDate(date.getDate() - dayOffset);
      const dateStr = date.toISOString().split('T')[0];

      // 5 to 15 bills per day
      const billsToday = Math.floor(Math.random() * 10) + 5; 

      for (let b = 0; b < billsToday; b++) {
        const billId = this.identityService.generateId();
        const billNumber = '#B-' + billCodeSeq.toString().padStart(4, '0');
        billCodeSeq++;

        // Random time between 8 AM and 10 PM
        const hour = Math.floor(Math.random() * 14) + 8;
        const min = Math.floor(Math.random() * 60);
        const createdAt = `${dateStr} ${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:00`;

        const paymentMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];

        let subtotal = 0;
        const billItems = [];
        const numItems = Math.floor(Math.random() * 5) + 1; // 1 to 5 items

        for (let i = 0; i < numItems; i++) {
          const product = products[Math.floor(Math.random() * products.length)];
          const quantity = Math.floor(Math.random() * 3) + 1;
          const total = product.price * quantity;
          subtotal += total;

          billItems.push({
            id: this.identityService.generateId(),
            product_id: product.product_id,
            product_name: product.name,
            product_type: product.type,
            quantity: quantity,
            price_per_unit: product.price,
            discount: 0,
            total: total
          });
        }

        // Apply random offer to ~30% of bills
        let discountTotal = 0;
        if (Math.random() > 0.7 && offers.length > 0) {
           const offer = offers[Math.floor(Math.random() * offers.length)];
           if (offer.discount_percentage > 0) {
             discountTotal = subtotal * (offer.discount_percentage / 100);
           } else if (offer.discount_flat > 0) {
             discountTotal = offer.discount_flat;
           }
        }
        
        if (discountTotal > subtotal) discountTotal = subtotal; // safety
        const taxableAmount = subtotal - discountTotal;
        const taxTotal = taxableAmount * 0.05; // 5% tax
        const grandTotal = taxableAmount + taxTotal;

        // Fetch customers to randomly assign to bills (50% walk-in, 50% registered)
        let customerId = 'WALK-IN-0000';
        if (Math.random() > 0.5) {
          const allCustomers = this.dbService.query<{customer_id: string}>("SELECT customer_id FROM customers WHERE is_system = 0");
          if (allCustomers.length > 0) {
            customerId = allCustomers[Math.floor(Math.random() * allCustomers.length)].customer_id;
          }
        }

        // Insert Bill
        this.dbService.execute(`
          INSERT INTO bills (bill_id, bill_number, device_id, user_id, session_id, customer_id, subtotal, discount_total, tax_total, grand_total, payment_method, status, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'COMPLETED', ?)
        `, [billId, billNumber, 'DEV-01', 'TEST-USER-0000', 'SESS-01', customerId, subtotal, discountTotal, taxTotal, grandTotal, paymentMethod, createdAt]);

        // Insert Bill Items
        for (const item of billItems) {
          this.dbService.execute(`
            INSERT INTO bill_items (bill_item_id, bill_id, product_id, product_name, product_type, quantity, price_per_unit, discount, total)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          `, [item.id, billId, item.product_id, item.product_name, item.product_type, item.quantity, item.price_per_unit, item.discount, item.total]);
        }
      }
    }

    this.dbService.execute(`UPDATE sequences SET next_value = ? WHERE sequence_name = 'BILL_NUMBER'`, [billCodeSeq]);
  }

  private seedHeldBills() {
    try {
      const existing = localStorage.getItem('bizcopilot_held_bills');
      if (!existing || existing === '[]') {
        const heldBills = [
          {
            id: 'HOLD-101',
            billNumber: 'Bill #1042',
            timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
            itemCount: 2,
            subtotal: 380,
            discount: 0,
            total: 380,
            cartItems: []
          },
          {
            id: 'HOLD-102',
            billNumber: 'Bill #1043',
            timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
            itemCount: 3,
            subtotal: 540,
            discount: 0,
            total: 540,
            cartItems: []
          },
          {
            id: 'HOLD-103',
            billNumber: 'Bill #1044',
            timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
            itemCount: 1,
            subtotal: 180,
            discount: 0,
            total: 180,
            cartItems: []
          }
        ];
        localStorage.setItem('bizcopilot_held_bills', JSON.stringify(heldBills));
      }
    } catch (e) {
      console.warn('Could not seed held bills to localStorage', e);
    }
  }
}
