import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessage } from '../../services/toast.service';
import { BizIconComponent } from '../biz-icon/biz-icon.component';

@Component({
  selector: 'app-message-toast',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './message-toast.component.html',
  styleUrls: ['./message-toast.component.scss']
})
export class MessageToastComponent implements OnInit, OnDestroy {
  @Input() toast!: ToastMessage;
  @Output() dismiss = new EventEmitter<string>();

  progress = 100;
  private intervalId: any;
  private remainingTime = 0;
  private totalDuration = 0;
  private tickRate = 16; // ~60fps
  private isPaused = false;

  ngOnInit() {
    if (this.toast.duration > 0) {
      this.totalDuration = this.toast.duration;
      this.remainingTime = this.totalDuration;
      this.startTimer();
    }
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  get iconName(): string {
    switch (this.toast.type) {
      case 'success': return 'check_circle';
      case 'info': return 'info';
      case 'warning': return 'warning';
      case 'error': return 'error';
      case 'undo': return 'undo';
      default: return 'info';
    }
  }

  get semanticClass(): string {
    return `toast-${this.toast.type}`;
  }

  startTimer() {
    this.isPaused = false;
    this.intervalId = setInterval(() => {
      if (this.isPaused) return;
      
      this.remainingTime -= this.tickRate;
      this.progress = Math.max(0, (this.remainingTime / this.totalDuration) * 100);

      if (this.remainingTime <= 0) {
        this.stopTimer();
        this.onDismiss();
      }
    }, this.tickRate);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  pauseTimer() {
    this.isPaused = true;
  }

  resumeTimer() {
    this.isPaused = false;
  }

  onDismiss() {
    this.dismiss.emit(this.toast.id);
  }

  onActionClick() {
    if (this.toast.action) {
      this.toast.action.onClick();
      this.onDismiss();
    }
  }
}
