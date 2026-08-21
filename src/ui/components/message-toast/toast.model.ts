export type ToastType = 'success' | 'info' | 'warning' | 'error' | 'undo';

export interface ToastConfig {
  id?: string;
  type: ToastType;
  title: string;
  message?: string;
  action?: string;
  duration?: number;
  dismissible?: boolean;
  onAction?: () => void;
  onClose?: () => void;
}
