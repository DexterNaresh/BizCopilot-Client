import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryViewModel } from '../../ui-models/category-view.model';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() category: CategoryViewModel | null = null;
  
  @Output() save = new EventEmitter<Partial<CategoryViewModel>>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      status: ['active', Validators.required]
    });
  }

  ngOnInit() {
    if (this.mode === 'edit' && this.category) {
      this.form.patchValue({
        name: this.category.name,
        status: this.category.status
      });
    }
  }

  get title(): string {
    return this.mode === 'create' ? 'Add Category' : 'Edit Category';
  }

  get submitLabel(): string {
    return this.mode === 'create' ? 'Add Category' : 'Save Changes';
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
