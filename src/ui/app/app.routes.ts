import { Routes } from '@angular/router';
import { SetupWizardComponent } from '../features/setup/setup-wizard/setup-wizard.component';
import { LoginShellComponent } from '../features/auth/components/login-shell/login-shell.component';

export const routes: Routes = [
  { path: 'setup', component: SetupWizardComponent },
  { path: 'login', component: LoginShellComponent },
  { path: '', redirectTo: '/setup', pathMatch: 'full' }
];
