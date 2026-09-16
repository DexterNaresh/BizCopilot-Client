import { Component, inject, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerStateService } from '../../services/customer-state.service';
import { ToastService } from '../../../../shared/services/toast.service';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BizIconComponent],
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  private fb = inject(FormBuilder);
  private state = inject(CustomerStateService);
  private toast = inject(ToastService);

  editingCustomer = this.state.editingCustomer();

  customerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/.*\S.*/)]],
    phone: [''],
    notes: ['']
  });

  isSaving = false;

  ngOnInit() {
    if (this.editingCustomer) {
      this.customerForm.patchValue({
        name: this.editingCustomer.name,
        phone: this.editingCustomer.phone ? this.editingCustomer.phone.replace(/^\+91\s*/, '') : ''
      });
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.onCancel();
  }

  onCancel() {
    if (this.customerForm.dirty && (this.customerForm.value.name || this.customerForm.value.phone || this.customerForm.value.notes)) {
      if (confirm('Discard customer?\n\nYour entered information will be lost.')) {
        this.closeModal();
      }
    } else {
      this.closeModal();
    }
  }

  closeModal() {
    this.customerForm.reset();
    this.state.closeAddCustomerModal();
  }

  async onSubmit() {
    if (this.customerForm.invalid || this.isSaving) {
      this.customerForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    
    let { name, phone, notes } = this.customerForm.value;
    name = name.trim();
    phone = phone ? '+91 ' + phone.replace(/^\+91\s*/, '').trim() : null;
    notes = notes ? notes.trim() : null;

    try {
      let success = false;
      if (this.editingCustomer) {
        success = await this.state.editCustomer(this.editingCustomer.id, name, phone, notes);
      } else {
        success = await this.state.addCustomer(name, phone, notes);
      }
      
      if (success) {
        this.toast.success(this.editingCustomer ? 'Customer updated successfully' : 'Customer added successfully');
        this.closeModal();
      } else {
        this.customerForm.get('phone')?.setErrors({ duplicate: true });
        // The spec implies the duplicate handling can be an inline validation message
        // I will just add the error to the field. The template will show it.
      }
    } catch (e) {
      this.toast.error('Unable to save customer. Please try again.');
    } finally {
      this.isSaving = false;
    }
  }
}
