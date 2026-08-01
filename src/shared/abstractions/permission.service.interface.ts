import { Injectable } from '@angular/core';
import { UserRole } from '../models/user.model';
@Injectable()
export abstract class IPermissionService {
  abstract hasPermission(role: UserRole, permission: string): boolean;
  abstract getRolePermissions(role: UserRole): string[];
}
