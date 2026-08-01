import { TestBed } from '@angular/core/testing';
import { PermissionManager } from './permission.service';
import { UserRole } from '@shared/models/user.model';

describe('PermissionManager', () => {
  let service: PermissionManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should allow OWNER to do anything', () => {
    expect(service.hasPermission(UserRole.OWNER, 'BILL_CREATE')).toBeTrue();
    expect(service.hasPermission(UserRole.OWNER, 'CUSTOMER_ARCHIVE')).toBeTrue();
    expect(service.hasPermission(UserRole.OWNER, 'BILL_VOID')).toBeTrue();
  });

  it('should always allow EMPLOYEE default fixed permissions', () => {
    expect(service.hasPermission(UserRole.EMPLOYEE, 'BILL_CREATE')).toBeTrue();
    expect(service.hasPermission(UserRole.EMPLOYEE, 'CUSTOMER_VIEW')).toBeTrue();
  });

  it('should always deny EMPLOYEE restricted fixed permissions', () => {
    expect(service.hasPermission(UserRole.EMPLOYEE, 'CUSTOMER_ARCHIVE')).toBeFalse();
    expect(service.hasPermission(UserRole.EMPLOYEE, 'SETTINGS_EDIT')).toBeFalse();
  });

  it('should deny EMPLOYEE configurable permissions by default', () => {
    expect(service.hasPermission(UserRole.EMPLOYEE, 'BILL_VOID')).toBeFalse();
    expect(service.hasPermission(UserRole.EMPLOYEE, 'AI_CHAT')).toBeFalse();
  });

  it('should allow EMPLOYEE configurable permissions if granted', () => {
    service.setEmployeeConfigurablePermissions(['BILL_VOID', 'AI_CHAT']);
    
    expect(service.hasPermission(UserRole.EMPLOYEE, 'BILL_VOID')).toBeTrue();
    expect(service.hasPermission(UserRole.EMPLOYEE, 'AI_CHAT')).toBeTrue();
    
    // Un-granted configurable permissions should still be false
    expect(service.hasPermission(UserRole.EMPLOYEE, 'PRICE_OVERRIDE')).toBeFalse();
  });
});
