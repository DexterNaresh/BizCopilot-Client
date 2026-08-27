import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BizIconComponent],
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {
  @Input() editCategory: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  categoryForm!: FormGroup;
  
  icons = [
    { name: 'local_cafe', colorHint: '#F3E8FF' }, // Purple
    { name: 'restaurant_menu', colorHint: '#FFEDD5' }, // Orange
    { name: 'fastfood', colorHint: '#FEF3C7' }, // Yellow
    { name: 'cake', colorHint: '#FCE7F3' }, // Pink
    { name: 'bakery_dining', colorHint: '#FFEDD5' }, // Orange
    { name: 'local_drink', colorHint: '#E0E7FF' }, // Blue
    { name: 'eco', colorHint: '#DCFCE7' }, // Green
    { name: 'energy_savings_leaf', colorHint: '#DCFCE7' }, // Green
    { name: 'soup_kitchen', colorHint: '#FEE2E2' }, // Red
    { name: 'icecream', colorHint: '#DBEAFE' }, // Light Blue
    { name: 'set_meal', colorHint: '#F3F4F6' }, // Gray
    { name: 'more_horiz', colorHint: '#F3F4F6', isMore: true } // More option
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [this.editCategory?.name || '', [Validators.required, Validators.maxLength(50)]],
      description: [this.editCategory?.description || '', [Validators.maxLength(200)]],
      icon: [this.editCategory?.icon || '', Validators.required],
      colorHint: [this.editCategory?.colorHint || '#F3F4F6'],
      status: [this.editCategory?.status || 'Active', Validators.required],
      addAnother: [false]
    });
  }

  get nameLength() {
    return this.categoryForm.get('name')?.value?.length || 0;
  }

  get descLength() {
    return this.categoryForm.get('description')?.value?.length || 0;
  }

  selectIcon(icon: any) {
    if (icon.isMore) {
      // Future: expand more icons
      return;
    }
    this.categoryForm.patchValue({
      icon: icon.name,
      colorHint: icon.colorHint
    });
  }

  setStatus(status: string) {
    this.categoryForm.patchValue({ status });
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    const payload = this.categoryForm.value;
    // Don't send addAnother to the parent, or parent can handle it, 
    // but the form holds it. We will emit the whole value.
    this.save.emit(payload);
    
    if (payload.addAnother) {
      // Keep modal open, reset form for next entry
      this.categoryForm.reset({ status: 'Active', addAnother: true });
    }
  }
}
