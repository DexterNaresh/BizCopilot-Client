import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

/**
 * Base abstract class for all SQLite repositories.
 * Provides generic CRUD operations to eliminate repetitive SQL.
 */
@Injectable()
export abstract class BaseRepository<T> {
  
  constructor(
    protected db: DatabaseService,
    protected readonly tableName: string,
    protected readonly primaryKeyColumn: string
  ) {}

  /**
   * Finds an entity by its primary key.
   */
  findById(id: string): T | null {
    const sql = `SELECT * FROM ${this.tableName} WHERE ${this.primaryKeyColumn} = ?`;
    return this.db.queryOne<T>(sql, [id]);
  }

  /**
   * Retrieves all entities in the table.
   */
  findAll(): T[] {
    const sql = `SELECT * FROM ${this.tableName}`;
    return this.db.query<T>(sql);
  }

  /**
   * Inserts a new entity dynamically based on the object keys.
   */
  create(entity: Partial<T>): void {
    const keys = Object.keys(entity);
    const values = Object.values(entity);
    
    const columns = keys.join(', ');
    const placeholders = keys.map(() => '?').join(', ');
    
    const sql = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`;
    this.db.execute(sql, values);
  }

  /**
   * Updates an existing entity dynamically based on object keys.
   */
  update(id: string, entity: Partial<T>): void {
    const keys = Object.keys(entity);
    const values = Object.values(entity);
    
    const setClause = keys.map(k => `${k} = ?`).join(', ');
    const sql = `UPDATE ${this.tableName} SET ${setClause} WHERE ${this.primaryKeyColumn} = ?`;
    
    this.db.execute(sql, [...values, id]);
  }

  /**
   * Deletes an entity by its primary key.
   */
  delete(id: string): void {
    const sql = `DELETE FROM ${this.tableName} WHERE ${this.primaryKeyColumn} = ?`;
    this.db.execute(sql, [id]);
  }
}
