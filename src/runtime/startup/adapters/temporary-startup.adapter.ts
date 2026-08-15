import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { SetupApplication, SaveBusinessDetailsCommand, CreateOwnerPinCommand } from '../../../application/contracts/setup.application';
import { ApplicationResult } from '../../../application/contracts/application-result.interface';

// Temporary in-memory store for development
const temporaryStore = {
  businessName: '',
  ownerName: '',
  businessType: '',
  pin: ''
};

@Injectable({ providedIn: 'root' })
export class TemporarySetupApplicationAdapter implements SetupApplication {
  saveBusinessDetails(command: SaveBusinessDetailsCommand): Observable<ApplicationResult<void>> {
    temporaryStore.businessName = command.businessName;
    temporaryStore.ownerName = command.ownerName;
    temporaryStore.businessType = command.businessType;
    return of({ success: true } as ApplicationResult<void>).pipe(delay(500));
  }

  createOwnerPin(command: CreateOwnerPinCommand): Observable<ApplicationResult<void>> {
    temporaryStore.pin = command.pin;
    return of({ success: true } as ApplicationResult<void>).pipe(delay(500));
  }
}
