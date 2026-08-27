import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ToastType = 'success' | 'info' | 'warning' | 'error' | 'undo';

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  action?: ToastAction;
  duration: number; // in milliseconds, 0 means manual dismiss
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<ToastMessage[]>([]);
  public toasts$: Observable<ToastMessage[]> = this.toastsSubject.asObservable();
  
  private maxVisibleToasts = 3;
  private queue: ToastMessage[] = [];

  constructor() {}

  success(title: string, message?: string, duration = 4000) {
    this.show({ id: this.generateId(), type: 'success', title, message, duration });
  }

  info(title: string, message?: string, duration = 4000) {
    this.show({ id: this.generateId(), type: 'info', title, message, duration });
  }

  warning(title: string, message?: string, duration = 5000) {
    this.show({ id: this.generateId(), type: 'warning', title, message, duration });
  }

  error(title: string, message?: string, duration = 6000) {
    this.show({ id: this.generateId(), type: 'error', title, message, duration });
  }

  undo(title: string, action: ToastAction, duration = 5000) {
    this.show({ id: this.generateId(), type: 'undo', title, action, duration });
  }

  private show(toast: ToastMessage) {
    const currentToasts = this.toastsSubject.value;
    
    if (currentToasts.length < this.maxVisibleToasts) {
      this.toastsSubject.next([...currentToasts, toast]);
    } else {
      this.queue.push(toast);
    }
  }

  dismiss(id: string) {
    const currentToasts = this.toastsSubject.value;
    const updatedToasts = currentToasts.filter(t => t.id !== id);
    
    // If we removed one and there's items in the queue, push the next one
    if (updatedToasts.length < currentToasts.length && this.queue.length > 0) {
      const nextToast = this.queue.shift();
      if (nextToast) {
        updatedToasts.push(nextToast);
      }
    }
    
    this.toastsSubject.next(updatedToasts);
  }
  
  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
