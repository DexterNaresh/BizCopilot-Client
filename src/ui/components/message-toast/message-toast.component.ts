import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastConfig } from './toast.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-message-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-toast.component.html',
  styleUrls: ['./message-toast.component.scss'],
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px) scale(0.95)' }),
        animate('200ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 0, transform: 'translateY(-10px) scale(0.95)' }))
      ])
    ])
  ]
})
export class MessageToastComponent implements OnInit, OnDestroy {
  @Input({ required: true }) config!: ToastConfig;
  @Output() dismiss = new EventEmitter<void>();

  private duration = 4000;
  private timer: any;
  private remainingTime: number = 0;
  private startTime: number = 0;
  public progress: number = 100;
  
  // Animation loop for smooth progress bar
  private progressRafId: number = 0;

  ngOnInit() {
    this.duration = this.config.duration || (this.config.type === 'error' ? 6000 : 4000);
    this.remainingTime = this.duration;
    this.startTimer();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.pauseTimer();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.startTimer();
  }

  private startTimer() {
    if (this.remainingTime <= 0) return;
    
    this.startTime = Date.now();
    this.timer = setTimeout(() => {
      this.onClose();
    }, this.remainingTime);

    const updateProgress = () => {
      if (!this.startTime) return; // paused
      const elapsed = Date.now() - this.startTime;
      const actualRemaining = Math.max(0, this.remainingTime - elapsed);
      this.progress = (actualRemaining / this.duration) * 100;
      
      if (actualRemaining > 0) {
        this.progressRafId = requestAnimationFrame(updateProgress);
      }
    };
    this.progressRafId = requestAnimationFrame(updateProgress);
  }

  private pauseTimer() {
    this.clearTimer();
    const elapsed = Date.now() - this.startTime;
    this.remainingTime -= elapsed;
    this.startTime = 0; // mark paused
  }

  private clearTimer() {
    if (this.timer) clearTimeout(this.timer);
    if (this.progressRafId) cancelAnimationFrame(this.progressRafId);
  }

  getIconName(): string {
    switch (this.config.type) {
      case 'success': return 'check_circle';
      case 'info': return 'info';
      case 'warning': return 'warning';
      case 'error': return 'error';
      case 'undo': return 'undo';
      default: return 'info';
    }
  }

  onActionClick() {
    if (this.config.onAction) {
      this.config.onAction();
    }
    this.onClose();
  }

  onClose() {
    this.dismiss.emit();
  }
}
