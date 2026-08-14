import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'app-pin-keypad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pin-keypad.component.html',
  styleUrls: ['./pin-keypad.component.scss']
})
export class PinKeypadComponent {
  public facade = inject(AuthFacade);

  public keypadRows = [
    [ { num: '1', alpha: '' }, { num: '2', alpha: 'ABC' }, { num: '3', alpha: 'DEF' } ],
    [ { num: '4', alpha: 'GHI' }, { num: '5', alpha: 'JKL' }, { num: '6', alpha: 'MNO' } ],
    [ { num: '7', alpha: 'PQRS' }, { num: '8', alpha: 'TUV' }, { num: '9', alpha: 'WXYZ' } ]
  ];

  onKeypadPress(digit: string) {
    this.facade.addDigit(digit);
  }

  onBackspace() {
    this.facade.removeDigit();
  }

  onClear() {
    this.facade.clearPin();
  }

  // Support for Desktop Keyboard
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key >= '0' && event.key <= '9') {
      this.onKeypadPress(event.key);
    } else if (event.key === 'Backspace') {
      this.onBackspace();
    } else if (event.key === 'Escape') {
      this.onClear();
    } else if (event.key === 'Enter') {
      // If 4 digits are already entered, allow authentication. 
      // Note: AuthFacade automatically advances when 4 digits are entered,
      // so this might only be useful if automatic advance failed or was delayed.
      if (this.facade.pin().length === 4) {
        this.facade.authenticate();
      }
    }
  }
}
