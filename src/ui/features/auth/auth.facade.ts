import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

export enum AuthState {
  Idle = 'idle',
  Authenticating = 'authenticating',
  Error = 'error',
  Success = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  private router = inject(Router);

  // State
  public pin = signal<string>('');
  public state = signal<AuthState>(AuthState.Idle);
  public error = signal<string | null>(null);
  public isBiometricAvailable = signal<boolean>(true); // Mocking biometric availability

  // Getters
  public pinArray = () => {
    const arr = [false, false, false, false];
    for (let i = 0; i < this.pin().length; i++) {
      arr[i] = true;
    }
    return arr;
  };

  // Actions
  public addDigit(digit: string) {
    if (this.state() === AuthState.Authenticating || this.pin().length >= 4) return;
    
    // Reset error state on new input
    if (this.state() === AuthState.Error) {
      this.state.set(AuthState.Idle);
      this.error.set(null);
    }

    const newPin = this.pin() + digit;
    this.pin.set(newPin);

    // Auto-advance authentication
    if (newPin.length === 4) {
      this.authenticate();
    }
  }

  public removeDigit() {
    if (this.state() === AuthState.Authenticating || this.pin().length === 0) return;
    this.pin.set(this.pin().slice(0, -1));
  }

  public clearPin() {
    if (this.state() === AuthState.Authenticating) return;
    this.pin.set('');
    this.state.set(AuthState.Idle);
    this.error.set(null);
  }

  public authenticate() {
    this.state.set(AuthState.Authenticating);
    
    // Mocking authentication delay
    setTimeout(() => {
      // For demo purposes, '1234' is the successful PIN
      if (this.pin() === '1234') {
        this.state.set(AuthState.Success);
        console.log('Authentication Successful! Navigating to Role-based Home...');
        this.router.navigate(['/home']);
      } else {
        this.state.set(AuthState.Error);
        this.error.set('Incorrect PIN.\nPlease try again.');
        this.pin.set(''); // Reset PIN on error to allow immediate retry
      }
    }, 1500);
  }

  public authenticateWithFingerprint() {
    this.state.set(AuthState.Authenticating);

    // Mocking biometric authentication delay
    setTimeout(() => {
      // Mock failure to demonstrate fallback to PIN
      this.state.set(AuthState.Error);
      this.error.set('Fingerprint failed. Please use PIN.');
    }, 1500);
  }
}
