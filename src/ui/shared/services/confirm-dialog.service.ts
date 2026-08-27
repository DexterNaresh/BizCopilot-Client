import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export type ConfirmVariant = 'danger' | 'warning' | 'info';

export interface ConfirmDialogConfig {
  variant: ConfirmVariant;
  title: string;
  message: string;
  warningMessage?: string;
  cancelLabel?: string;
  confirmLabel?: string;
}

export interface ConfirmDialogState extends ConfirmDialogConfig {
  isOpen: boolean;
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  private dialogStateSubject = new Subject<ConfirmDialogState | null>();
  public dialogState$: Observable<ConfirmDialogState | null> = this.dialogStateSubject.asObservable();
  
  private resolveFn: ((value: boolean) => void) | null = null;

  constructor() {}

  /**
   * Opens the confirmation dialog and returns a Promise that resolves 
   * when the user confirms (true) or cancels (false).
   */
  confirm(config: ConfirmDialogConfig): Promise<boolean> {
    return new Promise((resolve) => {
      this.resolveFn = resolve;
      this.dialogStateSubject.next({
        ...config,
        isOpen: true,
        isLoading: false
      });
    });
  }

  /**
   * Puts the dialog into a loading state (e.g., when deleting from server).
   */
  setLoading(isLoading: boolean) {
    // We emit true, the component will update its state if open
    // Since this is basic state management, we can let the component handle it locally,
    // or just manage the subject state here. For simplicity, we just use a subject.
  }

  close(result: boolean) {
    if (this.resolveFn) {
      this.resolveFn(result);
      this.resolveFn = null;
    }
    this.dialogStateSubject.next(null);
  }
}
