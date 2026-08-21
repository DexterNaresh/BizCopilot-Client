import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmationDialogConfig, ConfirmationResult } from './confirmation-dialog.model';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  private dialog = inject(Dialog);

  public confirm(config: ConfirmationDialogConfig): Promise<ConfirmationResult> {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open<ConfirmationResult>(ConfirmationDialogComponent, {
        data: config,
        disableClose: true, // We manage close on backdrop/escape manually to support config
        panelClass: 'bizcopilot-dialog-panel',
        backdropClass: 'bizcopilot-dialog-backdrop'
      });

      // Handle custom close triggers if enabled
      const backdropSub = dialogRef.backdropClick.subscribe(() => {
        if (config.closeOnBackdropClick) {
          dialogRef.close('Dismissed');
        }
      });

      const escapeSub = dialogRef.keydownEvents.subscribe(event => {
        if (event.key === 'Escape' && config.closeOnEscape !== false) {
          dialogRef.close('Dismissed');
        }
      });

      dialogRef.closed.subscribe(result => {
        backdropSub.unsubscribe();
        escapeSub.unsubscribe();
        resolve(result || 'Dismissed');
      });
    });
  }
}
