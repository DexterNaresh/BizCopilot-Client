import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupFacade, SetupStep } from '../../setup.facade';

@Component({
  selector: 'app-create-owner-pin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-owner-pin.component.html',
  styleUrls: ['./create-owner-pin.component.scss']
})
export class CreateOwnerPinComponent {
  public facade = inject(SetupFacade);
  
  private pin = signal<string>('');
  
  public pinLength = computed(() => this.pin().length);
  public pinArray = computed(() => Array.from({ length: 4 }, (_, i) => i < this.pinLength()));

  public keypadRows = [
    [
      { num: '1', alpha: '' },
      { num: '2', alpha: 'ABC' },
      { num: '3', alpha: 'DEF' }
    ],
    [
      { num: '4', alpha: 'GHI' },
      { num: '5', alpha: 'JKL' },
      { num: '6', alpha: 'MNO' }
    ],
    [
      { num: '7', alpha: 'PQRS' },
      { num: '8', alpha: 'TUV' },
      { num: '9', alpha: 'WXYZ' }
    ]
  ];

  goBack() {
    this.facade.setStep(SetupStep.BusinessDetails);
  }

  onKeypadPress(num: string) {
    if (this.pinLength() < 4) {
      this.pin.update(p => p + num);
    }
  }

  onBackspace() {
    if (this.pinLength() > 0) {
      this.pin.update(p => p.slice(0, -1));
    }
  }

  onClear() {
    this.pin.set('');
  }

  confirmPin() {
    if (this.pinLength() === 4) {
      this.facade.createOwnerPin(this.pin());
    }
  }
}
