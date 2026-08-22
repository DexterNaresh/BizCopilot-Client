import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
import initSqlJs from 'sql.js';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DatabaseService] });
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw error if queried before initialization', () => {
    expect(() => service.query('SELECT 1')).toThrowError(/not initialized/);
  });

  describe('Migrations', () => {
    it('should migrate legacy schema safely and preserve existing data', async () => {
      const SQL = await initSqlJs({
        locateFile: filename => `assets/${filename}`
      });
      const db = new SQL.Database();
      db.run(`
        CREATE TABLE products (product_id TEXT PRIMARY KEY, product_code TEXT NOT NULL UNIQUE, name TEXT NOT NULL, price REAL NOT NULL, category TEXT, barcode TEXT UNIQUE, available INTEGER NOT NULL DEFAULT 1, status TEXT NOT NULL DEFAULT 'ACTIVE', created_at TEXT NOT NULL);
        CREATE TABLE bills (bill_id TEXT PRIMARY KEY, bill_number TEXT NOT NULL UNIQUE, device_id TEXT NOT NULL, user_id TEXT NOT NULL, session_id TEXT NOT NULL, customer_id TEXT NOT NULL, subtotal REAL NOT NULL, discount_total REAL NOT NULL, tax_total REAL NOT NULL, grand_total REAL NOT NULL, payment_method TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'COMPLETED', created_at TEXT NOT NULL);
        CREATE TABLE bill_items (bill_item_id TEXT PRIMARY KEY, bill_id TEXT NOT NULL, product_id TEXT NOT NULL, quantity REAL NOT NULL, price_per_unit REAL NOT NULL, discount REAL NOT NULL, total REAL NOT NULL, FOREIGN KEY(bill_id) REFERENCES bills(bill_id), FOREIGN KEY(product_id) REFERENCES products(product_id));
      `);
      
      db.run(`INSERT INTO products (product_id, product_code, name, price, available, status, created_at) VALUES ('p1', 'PC-1', 'Old Prod', 100, 1, 'ACTIVE', '2023-01-01')`);
      db.run(`INSERT INTO bills (bill_id, bill_number, device_id, user_id, session_id, customer_id, subtotal, discount_total, tax_total, grand_total, payment_method, status, created_at) VALUES ('b1', 'B-1', 'd1', 'u1', 's1', 'c1', 100, 0, 0, 100, 'CASH', 'COMPLETED', '2023-01-01')`);
      db.run(`INSERT INTO bill_items (bill_item_id, bill_id, product_id, quantity, price_per_unit, discount, total) VALUES ('bi1', 'b1', 'p1', 1, 100, 0, 100)`);
      
      // Inject db into service to simulate legacy state
      (service as any).db = db;
      (service as any).isInitialized = true;
      
      // Run migrations
      (service as any).runMigrations();
      
      // Verify products migration
      const products: any[] = service.query('SELECT * FROM products');
      expect(products[0].type).toBe('QTY');
      
      // Verify bill items migration
      const billItems: any[] = service.query('SELECT * FROM bill_items');
      expect(billItems[0].product_name).toBe('Legacy Product');
      expect(billItems[0].product_type).toBe('QTY');
    });
  });
});


