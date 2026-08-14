import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { SaveBusinessDetailsCommand, SaveBusinessDetailsUseCase } from '../../../application/use-cases/startup/save-business-details.use-case';
import { CreateOwnerPinCommand, CreateOwnerPinUseCase } from '../../../application/use-cases/startup/create-owner-pin.use-case';
import { ApplicationResult } from '../../../application/contracts/application-result.interface';

// Temporary in-memory store for development
const temporaryStore = {
  businessName: '',
  ownerName: '',
  businessType: '',
  pin: ''
};

@Injectable({ providedIn: 'root' })
export class TemporarySaveBusinessDetailsAdapter implements SaveBusinessDetailsUseCase {
  execute(command: SaveBusinessDetailsCommand): Observable<ApplicationResult<void>> {
    temporaryStore.businessName = command.businessName;
    temporaryStore.ownerName = command.ownerName;
    temporaryStore.businessType = command.businessType;
    return of({ success: true }).pipe(delay(500));
  }
}

@Injectable({ providedIn: 'root' })
export class TemporaryCreateOwnerPinAdapter implements CreateOwnerPinUseCase {
  execute(command: CreateOwnerPinCommand): Observable<ApplicationResult<void>> {
    temporaryStore.pin = command.pin;
    return of({ success: true }).pipe(delay(500));
  }
}
