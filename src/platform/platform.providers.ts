import { Provider, APP_INITIALIZER } from '@angular/core';
import { environment } from '../environments/environment';

// Interfaces
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { ISequenceService } from '@shared/abstractions/sequence.service.interface';
import { ITransactionManager } from '@shared/abstractions/transaction-manager.interface';
import { IEventBus } from '@shared/abstractions/event-bus';
import { IConfigProvider } from '@shared/abstractions/config-provider';
import { IQueueStorage } from '@shared/abstractions/queue-storage';
import { ILocalStorageService } from '@shared/abstractions/storage.service';
import { IDatabaseService } from '@shared/abstractions/database.service';
import { ILogService } from '@shared/abstractions/log.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';

// Implementations
import { IdentityService } from './identity/identity.service';
import { SqliteSequenceService } from './sequence/sequence.service';
import { SqliteTransactionManager } from './sqlite/transaction.manager';
import { EventBusService } from './eventbus/event-bus.service';
import { ConfigProviderService } from './configuration/config-provider.service';
import { QueueStorage } from './synchronization/queue.storage';
import { LocalStorageService } from './storage/local-storage.service';
import { DatabaseService } from './sqlite/database.service';
import { DatabaseSeederService } from './sqlite/database-seeder.service';
import { LogService } from './logging/log.service';
import { PermissionManager } from './authentication/permission.service';
import { SessionService } from './authentication/session.service';

// Repositories
import { IBillRepository } from '@runtime/billing/repositories/bill.repository.interface';
import { SqliteBillRepository } from './sqlite/repositories/bill.repository';
import { IProductRepository } from '@runtime/product/repositories/product.repository.interface';
import { SqliteProductRepository } from './sqlite/repositories/product.repository';
import { ICustomerRepository } from '@runtime/customer/repositories/customer.repository.interface';
import { SqliteCustomerRepository } from './sqlite/repositories/customer.repository';
import { IOfferRepository } from '@runtime/offer/repositories/offer.repository.interface';
import { SqliteOfferRepository } from './sqlite/repositories/offer.repository';
import { IReportRepository } from '@runtime/report/repositories/report.repository.interface';
import { SqliteReportRepository } from './sqlite/repositories/report.repository';
import { ICategoryRepository } from '@runtime/category/repositories/category.repository.interface';
import { SqliteCategoryRepository } from './sqlite/repositories/category.repository';

export function initializeDatabase(dbService: IDatabaseService, seederService: DatabaseSeederService) {
  return async () => {
    await dbService.initialize();
    if (environment.seedTestData) {
      seederService.seed();
    }
  };
}

export const platformProviders: Provider[] = [
  { provide: IIdentityService, useClass: IdentityService },
  { provide: ISequenceService, useClass: SqliteSequenceService },
  { provide: ITransactionManager, useClass: SqliteTransactionManager },
  { provide: IEventBus, useClass: EventBusService },
  { provide: IConfigProvider, useClass: ConfigProviderService },
  { provide: IQueueStorage, useClass: QueueStorage },
  { provide: ILocalStorageService, useClass: LocalStorageService },
  { provide: IDatabaseService, useExisting: DatabaseService },
  { provide: ILogService, useClass: LogService },
  { provide: IPermissionService, useClass: PermissionManager },
  { provide: ISessionService, useClass: SessionService },
  
  {
    provide: APP_INITIALIZER,
    useFactory: initializeDatabase,
    deps: [IDatabaseService, DatabaseSeederService],
    multi: true
  },
  
  // SQLite Repositories
  { provide: IBillRepository, useClass: SqliteBillRepository },
  { provide: IProductRepository, useClass: SqliteProductRepository },
  { provide: ICustomerRepository, useClass: SqliteCustomerRepository },
  { provide: IOfferRepository, useClass: SqliteOfferRepository },
  { provide: IReportRepository, useClass: SqliteReportRepository },
  { provide: ICategoryRepository, useClass: SqliteCategoryRepository }
];
