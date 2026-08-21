import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { AddEditProductModalComponent } from './add-edit-product-modal.component';
import { ProductViewModel } from '../../ui-models/product-view.model';

@Injectable({
  providedIn: 'root'
})
export class AddEditProductModalService {
  private dialog = inject(Dialog);

  /**
   * Opens the Add Product modal.
   * @returns Promise<boolean> indicating whether the product was successfully saved.
   */
  public openAdd(): Promise<boolean> {
    return this.openModal(null);
  }

  /**
   * Opens the Edit Product modal.
   * @param product The product to edit.
   * @returns Promise<boolean> indicating whether the product was successfully updated.
   */
  public openEdit(product: ProductViewModel): Promise<boolean> {
    return this.openModal(product);
  }

  private openModal(product: ProductViewModel | null): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open<boolean>(AddEditProductModalComponent, {
        data: { product },
        disableClose: true, // Controlled internally
        panelClass: 'bizcopilot-dialog-panel', // Reusing the global responsive sheet panel
        backdropClass: 'bizcopilot-dialog-backdrop'
      });



      dialogRef.closed.subscribe(result => {
        resolve(result ?? false);
      });
    });
  }
}
