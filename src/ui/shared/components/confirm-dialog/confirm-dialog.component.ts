import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService, ConfirmDialogState } from '../../services/confirm-dialog.service';
import { BizIconComponent } from '../biz-icon/biz-icon.component';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  state: ConfirmDialogState | null = null;

  constructor(private confirmService: ConfirmDialogService) {}

  ngOnInit() {
    this.confirmService.dialogState$.subscribe(state => {
      this.state = state;
    });
  }

  get iconName(): string {
    switch (this.state?.variant) {
      case 'danger': return 'delete'; // or 'error' (Trash2)
      case 'warning': return 'warning';
      case 'info': return 'info';
      default: return 'info';
    }
  }

  get semanticClass(): string {
    return `dialog-${this.state?.variant || 'info'}`;
  }

  onCancel() {
    if (!this.state?.isLoading) {
      this.confirmService.close(false);
    }
  }

  onConfirm() {
    if (!this.state?.isLoading) {
      // In a real app with backend, we might set loading here, 
      // but for V1 we just resolve true and let caller handle loading/closing if needed.
      // Or we can just close immediately. 
      // The service API returns a Promise, so caller gets the true/false.
      this.confirmService.close(true);
    }
  }
}
