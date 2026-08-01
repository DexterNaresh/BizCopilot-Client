import { Injectable } from '@angular/core';
import { ITransactionManager } from '@shared/abstractions/transaction-manager.interface';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class SqliteTransactionManager implements ITransactionManager {
  constructor(private db: DatabaseService) {}

  execute<T>(work: () => T): T {
    try {
      this.db.execute('BEGIN TRANSACTION;');
      const result = work();
      this.db.execute('COMMIT;');
      return result;
    } catch (error) {
      this.db.execute('ROLLBACK;');
      throw error;
    }
  }
}
