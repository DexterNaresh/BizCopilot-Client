import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHeaderComponent } from './components/customer-header/customer-header.component';
import { CustomerKpiComponent } from './components/customer-kpi/customer-kpi.component';
import { CustomerToolbarComponent } from './components/customer-toolbar/customer-toolbar.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerBillDetailsComponent } from './components/customer-bill-details/customer-bill-details.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerStateService } from './services/customer-state.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule, 
    CustomerHeaderComponent, 
    CustomerKpiComponent, 
    CustomerToolbarComponent, 
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerBillDetailsComponent,
    AddCustomerComponent
  ],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  state = inject(CustomerStateService);
}
