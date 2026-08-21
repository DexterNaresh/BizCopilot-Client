import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ConfirmationDialogConfig, ConfirmationResult } from './confirmation-dialog.model';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  public dialogRef = inject<DialogRef<ConfirmationResult>>(DialogRef);
  public config = inject<ConfirmationDialogConfig>(DIALOG_DATA);

  public isLoading = signal(false);
  public error = signal<string | null>(null);

  getIconName(): string {
    switch (this.config.variant) {
      case 'danger': return 'delete'; // Trash2 equivalent in material rounded
      case 'warning': return 'warning';
      case 'info': return 'info';
      default: return 'info';
    }
  }

  getConfirmLabel(): string {
    return this.config.confirmText || 'Confirm';
  }

  getCancelLabel(): string {
    return this.config.cancelText || 'Cancel';
  }

  onCancel() {
    if (this.isLoading()) return;
    this.dialogRef.close('Cancelled');
  }

  onClose() {
    if (this.isLoading()) return;
    this.dialogRef.close('Dismissed');
  }

  async onConfirm() {
    if (this.isLoading()) return;
    
    if (this.config.action) {
      this.isLoading.set(true);
      this.error.set(null);
      
      try {
        const result = this.config.action();
        if (result instanceof Promise) {
          await result;
        }
        this.dialogRef.close('Confirmed');
      } catch (err: any) {
        // "Use the existing BizCopilot application error/message conventions."
        // We just display it safely here.
        this.error.set(err?.message || 'An unexpected error occurred. Please try again.');
        this.isLoading.set(false);
      }
    } else {
      this.dialogRef.close('Confirmed');
    }
  }
}
