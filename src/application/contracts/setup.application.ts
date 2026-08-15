import { Observable } from 'rxjs';
import { ApplicationResult } from './application-result.interface';

export interface SaveBusinessDetailsCommand {
  businessName: string;
  ownerName: string;
  businessType: string;
}

export interface CreateOwnerPinCommand {
  pin: string;
}

export abstract class SetupApplication {
  abstract saveBusinessDetails(command: SaveBusinessDetailsCommand): Observable<ApplicationResult<void>>;
  abstract createOwnerPin(command: CreateOwnerPinCommand): Observable<ApplicationResult<void>>;
}
