import { Routes } from '@angular/router';
import { SetupWizardComponent } from '../features/setup/setup-wizard/setup-wizard.component';
import { LoginShellComponent } from '../features/auth/components/login-shell/login-shell.component';
import { AppShellComponent } from '../layout/app-shell/app-shell.component';
import { HomeComponent } from '../features/home/home.component';
import { BillingComponent } from '../features/billing/billing.component';
import { ProductsComponent } from '../features/products/products.component';
import { CustomersComponent } from '../features/customers/customers.component';
import { ReportsComponent } from '../features/reports/reports.component';
import { OffersComponent } from '../features/offers/offers.component';
import { AiAssistantComponent } from '../features/ai-assistant/ai-assistant.component';
import { SettingsComponent } from '../features/settings/settings.component';
import { BackupSyncComponent } from '../features/backup-sync/backup-sync.component';
import { UsersComponent } from '../features/users/users.component';
import { HelpComponent } from '../features/help/help.component';
import { WhatsNewComponent } from '../features/whats-new/whats-new.component';
import { BillsComponent } from '../features/bills/bills.component';
import { BusinessProfileComponent } from '../features/business-profile/business-profile.component';

export const routes: Routes = [
  { path: 'setup', component: SetupWizardComponent },
  { path: 'login', component: LoginShellComponent },
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories', loadChildren: () => import('../features/categories/categories.routes').then(m => m.routes) },
      { path: 'customers', component: CustomersComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'ai-assistant', component: AiAssistantComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'backup-sync', component: BackupSyncComponent },
      { path: 'users', component: UsersComponent },
      { path: 'help', component: HelpComponent },
      { path: 'whats-new', component: WhatsNewComponent },
      { path: 'bills', component: BillsComponent },
      { path: 'business-profile', component: BusinessProfileComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/setup' }
];
