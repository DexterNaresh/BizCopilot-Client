import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../services/toast.service';
import { MessageToastComponent } from '../message-toast/message-toast.component';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, MessageToastComponent],
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent {
  toasts$ = this.toastService.toasts$;

  constructor(private toastService: ToastService) {}

  onDismiss(id: string) {
    this.toastService.dismiss(id);
  }
}
