import { Injectable } from '@angular/core';
import { User, Session } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export abstract class ISessionService {
  abstract session$: Observable<Session>;
  abstract startSession(user: User): void;
  abstract endSession(): void;
  abstract getCurrentSession(): Session;
  abstract getCurrentUser(): User | null;
}
