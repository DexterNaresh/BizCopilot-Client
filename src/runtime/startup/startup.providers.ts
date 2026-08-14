import { Provider } from '@angular/core';
import { SaveBusinessDetailsUseCase } from '../../application/use-cases/startup/save-business-details.use-case';
import { CreateOwnerPinUseCase } from '../../application/use-cases/startup/create-owner-pin.use-case';
import { TemporarySaveBusinessDetailsAdapter, TemporaryCreateOwnerPinAdapter } from './adapters/temporary-startup.adapter';

export const startupProviders: Provider[] = [
  {
    provide: SaveBusinessDetailsUseCase,
    useClass: TemporarySaveBusinessDetailsAdapter
  },
  {
    provide: CreateOwnerPinUseCase,
    useClass: TemporaryCreateOwnerPinAdapter
  }
];
