import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';

@Component({
  selector: 'app-add-product-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BizIconComponent],
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {
  @Input() editProduct: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  productForm: FormGroup;
  imagePreview: string | null = null;
  
  categories = ['Electronics', 'Groceries', 'Clothing', 'Furniture', 'Stationery'];
  types = [
    { id: 'Qty', label: 'Qty', supporting: 'By Quantity', icon: 'numbers' },
    { id: 'Kg', label: 'Kg', supporting: 'By Weight', icon: 'scale' },
    { id: 'Ltr', label: 'Ltr', supporting: 'By Volume', icon: 'water_drop' },
    { id: 'Meter', label: 'Meter', supporting: 'By Length', icon: 'straighten' },
    { id: 'Pack', label: 'Pack', supporting: 'By Pack', icon: 'inventory_2' }
  ];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      image: [null],
      name: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/.*\S.*/)]],
      type: ['Qty', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      description: ['', Validators.maxLength(250)],
      barcode: [''],
      category: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.editProduct) {
      this.productForm.patchValue({
        name: this.editProduct.name,
        type: this.editProduct.unit || 'Qty',
        price: this.editProduct.price,
        description: this.editProduct.description || '',
        category: this.editProduct.category || '',
        barcode: this.editProduct.barcode || ''
      });
      if (this.editProduct.image) {
        this.imagePreview = this.editProduct.image;
        this.productForm.patchValue({ image: this.editProduct.image });
      }
    }
  }

  get selectedType() {
    return this.productForm.get('type')?.value;
  }

  get typeHelperMessage() {
    const type = this.selectedType;
    if (type === 'Qty') return 'Use this option for items sold as count (e.g., 1, 2, 3...)';
    if (type === 'Kg') return 'Quantity will be entered as weight, e.g. 0.560 kg.';
    if (type === 'Ltr') return 'Quantity will be entered as volume, e.g. 0.750 Ltr.';
    if (type === 'Meter') return 'Quantity will be entered as length, e.g. 7.5 Meter.';
    if (type === 'Pack') return 'Quantity will be entered as whole packs.';
    return '';
  }

  get priceSuffix() {
    return `per ${this.selectedType}`;
  }
  
  get priceHelper() {
    return `Enter the selling price for 1 ${this.selectedType}`;
  }
  
  get nameLength() {
    return this.productForm.get('name')?.value?.length || 0;
  }
  
  get descLength() {
    return this.productForm.get('description')?.value?.length || 0;
  }

  setType(typeId: string) {
    this.productForm.get('type')?.setValue(typeId);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size exceeds 2MB limit.');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.productForm.get('image')?.setValue(this.imagePreview);
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.imagePreview = null;
    this.productForm.get('image')?.setValue(null);
  }

  onCancel() {
    if (this.productForm.dirty) {
      if (confirm('You have unsaved changes. Are you sure you want to cancel?')) {
        this.close.emit();
      }
    } else {
      this.close.emit();
    }
  }

  onSubmit() {
    this.productForm.markAllAsTouched();
    if (this.productForm.valid) {
      this.save.emit({
        id: this.editProduct?.id || Date.now(),
        ...this.productForm.value
      });
    }
  }
}
