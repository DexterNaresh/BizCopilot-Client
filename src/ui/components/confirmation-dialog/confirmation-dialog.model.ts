export type ConfirmationResult = 'Confirmed' | 'Cancelled' | 'Dismissed';

export interface ConfirmationDialogConfig {
  title: string;
  message: string;
  warningMessage?: string;
  variant: 'danger' | 'warning' | 'info';
  confirmText?: string;
  cancelText?: string;
  
  // Async or sync action to execute when confirm is clicked.
  // The dialog will enter a loading state while awaiting this action.
  action?: () => Promise<any> | any;
  
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
}
