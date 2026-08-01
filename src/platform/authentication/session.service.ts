import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, Session } from '@shared/models/user.model';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';

@Injectable()
export class SessionService implements ISessionService {
  private sessionSubject = new BehaviorSubject<Session>({
    id: '',
    user: null,
    startedAt: null
  });

  public session$ = this.sessionSubject.asObservable();

  constructor(private identityService: IIdentityService) {}

  /**
   * Starts a new session for the given user.
   * Generates a new unique session ID and records the start time.
   * @param user The user who is logging in
   */
  startSession(user: User): void {
    const session: Session = {
      id: this.identityService.generateId(),
      user,
      startedAt: new Date().toISOString()
    };
    this.sessionSubject.next(session);
  }

  /**
   * Ends the current session, clearing out the user and session data.
   */
  endSession(): void {
    this.sessionSubject.next({
      id: '',
      user: null,
      startedAt: null
    });
  }

  /**
   * Gets the currently active session object synchronously.
   * @returns The current Session object
   */
  getCurrentSession(): Session {
    return this.sessionSubject.getValue();
  }

  /**
   * Gets the currently logged-in user synchronously.
   * @returns The User object or null if no active session
   */
  getCurrentUser(): User | null {
    return this.sessionSubject.getValue().user;
  }
}
