import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryViewModel } from '../../ui-models/category-view.model';
import { CategoryStatusToggleComponent } from '../category-status-toggle/category-status-toggle.component';
import { CategoryIconPickerComponent } from '../category-icon-picker/category-icon-picker.component';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    CategoryStatusToggleComponent, 
    CategoryIconPickerComponent
  ],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() category: CategoryViewModel | null = null;
  @Input() isSaving: boolean = false;
  
  @Output() save = new EventEmitter<Partial<CategoryViewModel>>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;
  isIconPickerOpen = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(200)]],
      icon: ['category'], // default icon
      status: ['active', Validators.required]
    });
  }

  ngOnInit() {
    if (this.mode === 'edit' && this.category) {
      this.form.patchValue({
        name: this.category.name,
        description: this.category.description || '',
        icon: this.category.icon || 'category',
        status: this.category.status
      });
    }
  }

  get submitLabel(): string {
    return this.mode === 'create' ? 'Save Category' : 'Save Changes';
  }

  get savingLabel(): string {
    return this.mode === 'create' ? 'Saving...' : 'Updating...';
  }

  toggleIconPicker() {
    this.isIconPickerOpen = !this.isIconPickerOpen;
  }

  onIconSelect(icon: string) {
    this.form.patchValue({ icon });
    this.form.markAsDirty();
    this.isIconPickerOpen = false;
  }

  onStatusChange(status: 'active' | 'inactive') {
    this.form.patchValue({ status });
    this.form.markAsDirty();
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (this.form.valid && !this.isSaving) {
      this.save.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
