import { Injectable, signal, computed, inject } from '@angular/core';
import { SaveBusinessDetailsUseCase } from '../../../application/use-cases/startup/save-business-details.use-case';
import { CreateOwnerPinUseCase } from '../../../application/use-cases/startup/create-owner-pin.use-case';

export enum SetupStep {
  BusinessDetails = 0,
  OwnerPin = 1,
  Complete = 2
}

@Injectable({
  providedIn: 'root'
})
export class SetupFacade {
  private readonly saveBusinessUseCase = inject(SaveBusinessDetailsUseCase);
  private readonly createPinUseCase = inject(CreateOwnerPinUseCase);

  // State signals
  private readonly _currentStep = signal<SetupStep>(SetupStep.BusinessDetails);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  // Business info temporarily held in facade before final submit, or saved immediately?
  // The flow says: 
  // Business Details -> SaveBusinessDetailsUseCase
  // Owner PIN -> CreateOwnerPinUseCase
  // We will save them at each step.
  private readonly _businessName = signal<string>('');
  private readonly _businessType = signal<string>('');

  // Public computed state
  public readonly currentStep = computed(() => this._currentStep());
  public readonly isLoading = computed(() => this._isLoading());
  public readonly error = computed(() => this._error());
  
  public readonly businessName = computed(() => this._businessName());
  public readonly businessType = computed(() => this._businessType());

  saveBusinessDetails(name: string, owner: string, type: string) {
    this._isLoading.set(true);
    this._error.set(null);

    this.saveBusinessUseCase.execute({
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
          this._error.set(result.error || 'Failed to save business details.');
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

    this.createPinUseCase.execute({ pin }).subscribe({
      next: (result) => {
        this._isLoading.set(false);
        if (result.success) {
          this.setStep(SetupStep.Complete);
        } else {
          this._error.set(result.error || 'Failed to create owner PIN.');
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
