import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupFacade, SetupStep } from '../setup.facade';
import { BusinessDetailsComponent } from '../components/business-details/business-details.component';
import { CreateOwnerPinComponent } from '../components/create-owner-pin/create-owner-pin.component';
import { SetupCompleteComponent } from '../components/setup-complete/setup-complete.component';

@Component({
  selector: 'app-setup-wizard',
  standalone: true,
  imports: [CommonModule, BusinessDetailsComponent, CreateOwnerPinComponent, SetupCompleteComponent],
  templateUrl: './setup-wizard.component.html',
  styleUrls: ['./setup-wizard.component.scss']
})
export class SetupWizardComponent {
  public facade = inject(SetupFacade);
  
  // Expose enum to template
  public SetupStep = SetupStep;
}
