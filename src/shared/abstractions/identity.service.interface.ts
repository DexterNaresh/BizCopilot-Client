import { Injectable } from '@angular/core';
@Injectable()
export abstract class IIdentityService {
  abstract generateId(): string;
}
