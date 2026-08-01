import { Injectable } from '@angular/core';
@Injectable()
export abstract class ITransactionManager {
  abstract execute<T>(work: () => T): T;
}
