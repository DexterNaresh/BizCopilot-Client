import { Provider } from '@angular/core';
import { SetupApplication } from '../../application/contracts/setup.application';
import { TemporarySetupApplicationAdapter } from './adapters/temporary-startup.adapter';

export const startupProviders: Provider[] = [
  {
    provide: SetupApplication,
    useClass: TemporarySetupApplicationAdapter
  }
];
