import { Injectable, signal, computed, inject } from '@angular/core';
import { SetupApplication } from '../../../application/contracts/setup.application';

export enum SetupStep {
  BusinessDetails = 0,
  OwnerPin = 1,
  Complete = 2
}

@Injectable({
  providedIn: 'root'
})
export class SetupFacade {
  private readonly setupApplication = inject(SetupApplication);

  // State signals
  private readonly _currentStep = signal<SetupStep>(SetupStep.BusinessDetails);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  private readonly _businessName = signal<string>('');
  private readonly _businessType = signal<string>('');

  public readonly currentStep = computed(() => this._currentStep());
  public readonly isLoading = computed(() => this._isLoading());
  public readonly error = computed(() => this._error());
  
  public readonly businessName = computed(() => this._businessName());
  public readonly businessType = computed(() => this._businessType());

  saveBusinessDetails(name: string, owner: string, type: string) {
    this._isLoading.set(true);
    this._error.set(null);

    this.setupApplication.saveBusinessDetails({
      businessName: name,
      ownerName: owner,
      businessType: type
    }).subscribe({
      next: (result) => {
        this._isLoading.set(false);
        if (result.success) {
          this._businessName.set(name);
          this._businessType.set(type);
          this.setStep(SetupStep.OwnerPin);
        } else {
          this._error.set(result.error?.message || 'Failed to save business details.');
        }
      },
      error: (err) => {
        this._isLoading.set(false);
        this._error.set('An unexpected error occurred.');
        console.error(err);
      }
    });
  }

  createOwnerPin(pin: string) {
    this._isLoading.set(true);
    this._error.set(null);

    this.setupApplication.createOwnerPin({ pin }).subscribe({
      next: (result) => {
        this._isLoading.set(false);
        if (result.success) {
          this.setStep(SetupStep.Complete);
        } else {
          this._error.set(result.error?.message || 'Failed to create owner PIN.');
        }
      },
      error: (err) => {
        this._isLoading.set(false);
        this._error.set('An unexpected error occurred.');
        console.error(err);
      }
    });
  }

  setStep(step: SetupStep) {
    this._currentStep.set(step);
    this._error.set(null);
  }
}
