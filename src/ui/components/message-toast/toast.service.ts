import { Injectable, signal } from '@angular/core';
import { ToastConfig } from './toast.model';
import { uuidv7 } from 'uuidv7';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toasts = signal<ToastConfig[]>([]);
  public readonly toasts = this._toasts.asReadonly();

  private readonly MAX_VISIBLE = 3;

  public show(config: ToastConfig): string {
    const id = config.id || uuidv7();
    const newToast: ToastConfig = { ...config, id, dismissible: config.dismissible ?? true };

    this._toasts.update(currentToasts => {
      // Add to front of queue (stacking top-down).
      // If we only want max 3, we can enforce it here, but typically we let the container slice them for visibility.
      // The spec says: "Maximum visible Toasts: 3. If more notifications exist: queue them."
      return [newToast, ...currentToasts];
    });

    return id;
  }

  public success(title: string, message?: string, config?: Partial<ToastConfig>) {
    return this.show({ type: 'success', title, message, ...config });
  }

  public info(title: string, message?: string, config?: Partial<ToastConfig>) {
    return this.show({ type: 'info', title, message, ...config });
  }

  public warning(title: string, message?: string, config?: Partial<ToastConfig>) {
    return this.show({ type: 'warning', title, message, ...config });
  }

  public error(title: string, message?: string, config?: Partial<ToastConfig>) {
    return this.show({ type: 'error', title, message, ...config });
  }

  public undo(title: string, onAction: () => void, message?: string, config?: Partial<ToastConfig>) {
    return this.show({ type: 'undo', title, message, action: 'Undo', onAction, ...config });
  }

  public dismiss(id: string) {
    const toast = this._toasts().find(t => t.id === id);
    if (toast?.onClose) {
      toast.onClose();
    }
    
    this._toasts.update(toasts => toasts.filter(t => t.id !== id));
  }
}
