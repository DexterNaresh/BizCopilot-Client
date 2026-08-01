import { Injectable } from '@angular/core';
import { BaseRepository } from '../base.repository';
import { CustomerEntity } from '@runtime/customer/models/customer.entity';
import { DatabaseService } from '../database.service';
import { ICustomerRepository } from '@runtime/customer/repositories/customer.repository.interface';

@Injectable({
  providedIn: 'root'
})
export class SqliteCustomerRepository extends BaseRepository<CustomerEntity> implements ICustomerRepository {
  constructor(db: DatabaseService) {
    super(db, 'customers', 'customer_id');
  }

  override findById(id: string): CustomerEntity | null {
    return super.findById(id);
  }

  findByPhone(phone: string): CustomerEntity | null {
    const sql = `SELECT * FROM ${this.tableName} WHERE phone = ?`;
    return this.db.queryOne<CustomerEntity>(sql, [phone]);
  }

  saveNewCustomer(customer: CustomerEntity): CustomerEntity {
    this.create(customer);
    return customer;
  }

  override update(id: string, customer: CustomerEntity): void {
    super.update(id, customer);
  }
}
