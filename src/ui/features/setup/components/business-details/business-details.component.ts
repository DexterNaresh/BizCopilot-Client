import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SetupFacade } from '../../setup.facade';

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent {
  private fb = inject(FormBuilder);
  public facade = inject(SetupFacade);

  public form = this.fb.group({
    businessName: ['', Validators.required],
    ownerName: ['', Validators.required],
    businessType: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.valid) {
      const { businessName, ownerName, businessType } = this.form.value;
      this.facade.saveBusinessDetails(businessName!, ownerName!, businessType!);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
