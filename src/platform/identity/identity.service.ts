import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { uuidv7 } from 'uuidv7';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService implements IIdentityService {
  generateId(): string {
    return uuidv7();
  }
}
