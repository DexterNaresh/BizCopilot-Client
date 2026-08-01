import { Injectable } from '@angular/core';
import { UserRole } from '@shared/models/user.model';

export type PermissionKey = 
  | 'BILL_CREATE' | 'BILL_COMPLETE' | 'BILL_VOID' | 'BILL_REPRINT' | 'BILL_VIEW' | 'PRICE_OVERRIDE'
  | 'CUSTOMER_CREATE' | 'CUSTOMER_UPDATE' | 'CUSTOMER_ARCHIVE' | 'CUSTOMER_VIEW'
  | 'PRODUCT_CREATE' | 'PRODUCT_UPDATE' | 'PRODUCT_ARCHIVE' | 'PRODUCT_VIEW' | 'PRODUCT_AVAILABILITY'
  | 'OFFER_CREATE' | 'OFFER_UPDATE' | 'OFFER_ACTIVATE' | 'OFFER_VIEW'
  | 'REPORT_VIEW' | 'SETTINGS_VIEW' | 'SETTINGS_EDIT' | 'AI_CHAT' | 'BACKUP_VIEW' | 'BACKUP_MANAGE';

@Injectable({
  providedIn: 'root'
})
export class PermissionManager {

  // Permissions that Employee always has
  private readonly EMPLOYEE_ALWAYS_ALLOWED = new Set<PermissionKey>([
    'BILL_CREATE', 'BILL_COMPLETE', 'BILL_REPRINT', 'BILL_VIEW', 
    'CUSTOMER_CREATE', 'CUSTOMER_VIEW', 'PRODUCT_VIEW'
  ]);

  // Permissions that Employee NEVER has
  private readonly EMPLOYEE_NEVER_ALLOWED = new Set<PermissionKey>([
    'CUSTOMER_ARCHIVE', 'PRODUCT_ARCHIVE', 'OFFER_CREATE', 
    'OFFER_UPDATE', 'OFFER_ACTIVATE', 'SETTINGS_VIEW', 
    'SETTINGS_EDIT', 'BACKUP_VIEW', 'BACKUP_MANAGE'
  ]);

  // The set of configurable permissions granted to Employees (loaded from Settings)
  private grantedEmployeePermissions = new Set<PermissionKey>();

  /**
   * Updates the granted permissions for employees based on settings.
   * This should be called during startup or when settings are saved.
   * @param permissions List of configurable permissions granted
   */
  setEmployeeConfigurablePermissions(permissions: PermissionKey[]): void {
    this.grantedEmployeePermissions = new Set(permissions);
  }

  /**
   * Checks if a specific role has the requested permission.
   * @param role The role of the user (Owner or Employee)
   * @param permission The permission key to check
   * @returns true if allowed, false otherwise
   */
  hasPermission(role: UserRole, permission: PermissionKey): boolean {
    if (role === UserRole.OWNER) {
      return true; // Owner has full access
    }

    if (role === UserRole.EMPLOYEE) {
      if (this.EMPLOYEE_ALWAYS_ALLOWED.has(permission)) {
        return true;
      }
      if (this.EMPLOYEE_NEVER_ALLOWED.has(permission)) {
        return false;
      }
      // It's a configurable permission. Check if granted.
      return this.grantedEmployeePermissions.has(permission);
    }

    return false;
  }
}
