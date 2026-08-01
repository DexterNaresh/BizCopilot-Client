import { BusinessException } from './business.exception';
export class AuthorizationException extends BusinessException {
  constructor(message: string = 'Permission denied.') { super('PERMISSION_DENIED', message); this.name = 'AuthorizationException'; }
}
