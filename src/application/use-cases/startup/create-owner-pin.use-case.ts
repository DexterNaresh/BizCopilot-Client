import { ApplicationResult } from '../../contracts/application-result.interface';
import { Observable } from 'rxjs';

export interface CreateOwnerPinCommand {
  pin: string;
}

export abstract class CreateOwnerPinUseCase {
  abstract execute(command: CreateOwnerPinCommand): Observable<ApplicationResult<void>>;
}
