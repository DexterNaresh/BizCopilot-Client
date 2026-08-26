import { Injectable } from '@angular/core';
import initSqlJs, { Database, QueryExecResult } from 'sql.js';
import { IDatabaseService } from '@shared/abstractions/database.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements IDatabaseService {
  private db: Database | null = null;
  private isInitialized = false;

  /**
   * Initializes sql.js WebAssembly engine and creates tables
   */
  async initialize(): Promise<void> {
    if (this.isInitialized && this.db) {
      return;
    }

    const SQL = await initSqlJs({
      locateFile: filename => window.location.pathname.includes('context.html') 
        ? `base/src/assets/${filename}`
        : `assets/${filename}`
    });

    this.db = new SQL.Database();
    this.isInitialized = true;
    this.createCoreTables();
    this.runMigrations();
  }

  execute(sql: string, params: any[] = []): void {
    this.ensureInitialized();
    this.db!.run(sql, params);
  }

  query<T = any>(sql: string, params: any[] = []): T[] {
    this.ensureInitialized();
    const stmt = this.db!.prepare(sql);
    stmt.bind(params);

    const results: T[] = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject() as T);
    }
    stmt.free();
    return results;
  }

  queryOne<T = any>(sql: string, params: any[] = []): T | null {
    const results = this.query<T>(sql, params);
    return results.length > 0 ? results[0] : null;
  }

  exportDatabase(): Uint8Array {
    this.ensureInitialized();
    return this.db!.export();
  }

  private ensureInitialized(): void {
    if (!this.isInitialized || !this.db) {
      throw new Error('DatabaseService is not initialized. Call initialize() first.');
    }
  }

  private runMigrations(): void {
    // Migration: Add 'type' to products
    const productInfo = this.query<{name: string}>(`PRAGMA table_info(products)`);
    if (!productInfo.some(c => c.name === 'type')) {
      this.execute(`ALTER TABLE products ADD COLUMN type TEXT NOT NULL DEFAULT 'QTY'`);
    }

    // Migration: Add 'product_name' and 'product_type' to bill_items
    const billItemInfo = this.query<{name: string}>(`PRAGMA table_info(bill_items)`);
    if (!billItemInfo.some(c => c.name === 'product_name')) {
      this.execute(`ALTER TABLE bill_items ADD COLUMN product_name TEXT NOT NULL DEFAULT 'Legacy Product'`);
      this.execute(`ALTER TABLE bill_items ADD COLUMN product_type TEXT NOT NULL DEFAULT 'QTY'`);
    }
  }

  private createCoreTables(): void {
    this.execute(`
      CREATE TABLE IF NOT EXISTS users (
        user_id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        pin_hash TEXT NOT NULL,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS sequences (
        sequence_name TEXT PRIMARY KEY,
        next_value INTEGER NOT NULL
      );

      CREATE TABLE IF NOT EXISTS products (
        product_id TEXT PRIMARY KEY,
        product_code TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        type TEXT NOT NULL DEFAULT 'QTY',
        price REAL NOT NULL,
        category TEXT,
        barcode TEXT UNIQUE,
        available INTEGER NOT NULL DEFAULT 1,
        status TEXT NOT NULL DEFAULT 'ACTIVE',
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS customers (
        customer_id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT UNIQUE,
        email TEXT,
        is_system INTEGER NOT NULL DEFAULT 0,
        status TEXT NOT NULL DEFAULT 'ACTIVE',
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS offers (
        offer_id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        discount_percentage REAL,
        discount_flat REAL,
        status TEXT NOT NULL DEFAULT 'ACTIVE',
        valid_from TEXT,
        valid_until TEXT,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS bills (
        bill_id TEXT PRIMARY KEY,
        bill_number TEXT NOT NULL UNIQUE,
        device_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        session_id TEXT NOT NULL,
        customer_id TEXT NOT NULL,
        subtotal REAL NOT NULL,
        discount_total REAL NOT NULL,
        tax_total REAL NOT NULL,
        grand_total REAL NOT NULL,
        payment_method TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'COMPLETED',
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS bill_items (
        bill_item_id TEXT PRIMARY KEY,
        bill_id TEXT NOT NULL,
        product_id TEXT NOT NULL,
        product_name TEXT NOT NULL,
        product_type TEXT NOT NULL,
        quantity REAL NOT NULL,
        price_per_unit REAL NOT NULL,
        discount REAL NOT NULL,
        total REAL NOT NULL,
        FOREIGN KEY(bill_id) REFERENCES bills(bill_id),
        FOREIGN KEY(product_id) REFERENCES products(product_id)
      );
    `);

    // Initialize Walk-In Customer
    this.execute(`
      INSERT OR IGNORE INTO customers (customer_id, name, phone, is_system, status, created_at)
      VALUES ('00000000-0000-0000-0000-000000000000', 'Walk-In Customer', '1', 1, 'ACTIVE', datetime('now'));
    `);

    // Initialize Sequences
    this.execute(`
      INSERT OR IGNORE INTO sequences (sequence_name, next_value) 
      VALUES ('BILL_NUMBER', 1);
    `);
    this.execute(`
      INSERT OR IGNORE INTO sequences (sequence_name, next_value) 
      VALUES ('PRODUCT_CODE', 1);
    `);
  }
}
