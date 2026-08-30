import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BizIconComponent } from '../../../../shared/components/biz-icon/biz-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-header',
  standalone: true,
  imports: [CommonModule, BizIconComponent],
  templateUrl: './payment-header.component.html',
  styleUrls: ['./payment-header.component.scss']
})
export class PaymentHeaderComponent {
  @Input() billNumber: string = '1052';
  @Input() itemsCount: number = 4;
  
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  onBack() {
    this.router.navigate(['/billing']);
  }
}
