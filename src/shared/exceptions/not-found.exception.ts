import { BusinessException } from './business.exception';
export class NotFoundException extends BusinessException {
  constructor(public readonly entityName: string, id: string) { super(entityName.toUpperCase() + '_NOT_FOUND', `${entityName} with ID ${id} not found.`); this.name = 'NotFoundException'; }
}
