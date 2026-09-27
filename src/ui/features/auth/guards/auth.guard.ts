import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { environment } from '../../../../environments/environment';

export const authGuard: CanActivateFn = (route, state) => {
  const sessionService: ISessionService = inject(ISessionService);
  const router = inject(Router);

  if (sessionService.getCurrentUser()) {
    return true;
  }

  // If testing with seedTestData and the session hasn't started yet, allow fallback creation in AppComponent
  if (environment.seedTestData) {
    return true;
  }

  // Redirect to login page
  return router.parseUrl('/login');
};
