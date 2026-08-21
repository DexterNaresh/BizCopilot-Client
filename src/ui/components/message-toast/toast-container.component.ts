import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { MessageToastComponent } from './message-toast.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, MessageToastComponent],
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', []) // Just to allow individual item animations to work cleanly
    ])
  ]
})
export class ToastContainerComponent {
  private toastService = inject(ToastService);
  
  // Spec: "Maximum visible Toasts: 3. If more notifications exist: queue them."
  // Since we push to the front of the array, the first 3 are the most recent.
  visibleToasts = computed(() => {
    return this.toastService.toasts().slice(0, 3);
  });

  onDismiss(id: string) {
    this.toastService.dismiss(id);
  }
}
