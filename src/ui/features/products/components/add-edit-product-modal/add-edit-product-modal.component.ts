import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ProductFacade } from '../../facades/product.facade';
import { SaveProductCommand } from '../../../../../application/contracts/product.application';
import { ProductViewModel } from '../../ui-models/product-view.model';
import { ConfirmationDialogService } from '../../../../components/confirmation-dialog/confirmation-dialog.service';

export interface AddEditProductDialogData {
  product: ProductViewModel | null;
}

@Component({
  selector: 'app-add-edit-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-edit-product-modal.component.html',
  styleUrls: ['./add-edit-product-modal.component.scss']
})
export class AddEditProductModalComponent implements OnInit, OnDestroy {
  private dialogRef = inject(DialogRef<boolean>);
  private data = inject<AddEditProductDialogData>(DIALOG_DATA);
  private confirmationService = inject(ConfirmationDialogService);
  public facade = inject(ProductFacade);

  private subs = new Subscription();
  private initialDataString: string = '';

  public isEditMode = false;
  public isSaving = signal<boolean>(false);
  public error = signal<string | null>(null);

  public formData: SaveProductCommand = {
    name: '',
    categoryId: '',
    sellingPrice: 0,
    availability: 'available',
    favourite: false,
    type: 'QTY',
    description: '',
    barcode: '',
    image: undefined
  };

  ngOnInit() {
    // If edit mode, populate form
    if (this.data.product) {
      this.isEditMode = true;
      const p = this.data.product;
      this.formData = {
        id: p.id,
        name: p.name,
        categoryId: p.categoryId,
        sellingPrice: p.sellingPrice,
        availability: p.availability,
        favourite: p.favourite,
        type: p.type,
        description: p.description,
        barcode: p.barcode,
        image: p.image
      };
    } else {
      // Add mode defaults
      const cats = this.facade.categories();
      if (cats.length > 0) {
        this.formData.categoryId = cats[0].id;
      }
    }

    this.initialDataString = JSON.stringify(this.formData);

    this.subs.add(this.dialogRef.backdropClick.subscribe(() => {
      this.onCancel();
    }));

    this.subs.add(this.dialogRef.keydownEvents.subscribe(event => {
      if (event.key === 'Escape') {
        this.onCancel();
      }
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private isDirty(): boolean {
    return this.initialDataString !== JSON.stringify(this.formData);
  }

  get priceSuffix(): string {
    switch (this.formData.type) {
      case 'QTY': return 'Qty';
      case 'KG': return 'Kg';
      case 'LTR': return 'Ltr';
      case 'METER': return 'Meter';
      case 'PACK': return 'Pack';
      default: return 'Qty';
    }
  }

  onSelectType(type: 'QTY' | 'KG' | 'LTR' | 'METER' | 'PACK') {
    this.formData.type = type;
  }

  async onSave() {
    if (this.isSaving()) return;

    if (!this.formData.name.trim() || !this.formData.categoryId || this.formData.sellingPrice <= 0) {
      this.error.set('Please fill out all required fields correctly.');
      return;
    }

    this.isSaving.set(true);
    this.error.set(null);

    const success = await this.facade.saveProduct(this.formData);
    
    if (success) {
      this.dialogRef.close(true);
    } else {
      // Facade error is already updated, but we can capture it
      this.error.set(this.facade.error() || 'An error occurred while saving.');
      this.isSaving.set(false);
    }
  }

  async onCancel() {
    if (this.isSaving()) return;
    
    if (this.isDirty()) {
      const result = await this.confirmationService.confirm({
        title: 'Discard changes?',
        message: 'Your unsaved changes will be lost.',
        variant: 'warning',
        confirmText: 'Discard Changes',
        cancelText: 'Cancel'
      });
      if (result === 'Confirmed') {
        this.dialogRef.close(false);
      }
    } else {
      this.dialogRef.close(false);
    }
  }
}
