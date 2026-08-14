import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'app-fingerprint-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fingerprint-login.component.html',
  styleUrls: ['./fingerprint-login.component.scss']
})
export class FingerprintLoginComponent {
  public facade = inject(AuthFacade);

  useFingerprint() {
    this.facade.authenticateWithFingerprint();
  }
}
