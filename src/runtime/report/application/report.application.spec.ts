import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { ReportApplication } from './report.application';
import { ReportService } from '@runtime/report/report.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('ReportApplication', () => {
  let app: ReportApplication;
  let serviceSpy: jasmine.SpyObj<ReportService>;
  let permissionSpy: jasmine.SpyObj<IPermissionService>;
  let sessionSpy: jasmine.SpyObj<ISessionService>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('ReportService', ['getSalesSummary', 'getSalesTrend']);
    permissionSpy = jasmine.createSpyObj('IPermissionService', ['hasPermission']);
    sessionSpy = jasmine.createSpyObj('ISessionService', ['getCurrentUser']);

    TestBed.configureTestingModule({
      providers: [
        ReportApplication,
        { provide: ReportService, useValue: serviceSpy },
        { provide: IPermissionService, useValue: permissionSpy },
        { provide: ISessionService, useValue: sessionSpy }
      ]
    });
    app = TestBed.inject(ReportApplication);
  });

  it('should deny access if user lacks REPORT_VIEW permission (Employee)', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'user1', role: UserRole.EMPLOYEE } as any);
    permissionSpy.hasPermission.and.returnValue(false); // Employees don't have REPORT_VIEW by default

    const result = app.getSalesSummary({ userId: 'user1', sessionId: 's1' });

    expect(result.success).toBeFalse();
    expect(result.error?.code).toBe('PERMISSION_DENIED');
    expect(serviceSpy.getSalesSummary).not.toHaveBeenCalled();
  });

  it('should allow access if user has permission (Owner)', () => {
    sessionSpy.getCurrentUser.and.returnValue({ id: 'owner1', role: UserRole.OWNER } as any);
    permissionSpy.hasPermission.and.returnValue(true);
    serviceSpy.getSalesSummary.and.returnValue({ totalBills: 1 } as any);

    const result = app.getSalesSummary({ userId: 'owner1', sessionId: 's1' });

    expect(result.success).toBeTrue();
    expect(serviceSpy.getSalesSummary).toHaveBeenCalled();
  });
});




