import { ApplicationResult } from '../../contracts/application-result.interface';
import { Observable } from 'rxjs';

export interface SaveBusinessDetailsCommand {
  businessName: string;
  ownerName: string;
  businessType: string;
}

export abstract class SaveBusinessDetailsUseCase {
  abstract execute(command: SaveBusinessDetailsCommand): Observable<ApplicationResult<void>>;
}
