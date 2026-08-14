import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade, AuthState } from '../../auth.facade';
import { PinKeypadComponent } from '../pin-keypad/pin-keypad.component';
import { FingerprintLoginComponent } from '../fingerprint-login/fingerprint-login.component';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [CommonModule, PinKeypadComponent, FingerprintLoginComponent],
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent {
  public facade = inject(AuthFacade);
  public AuthState = AuthState;
}
