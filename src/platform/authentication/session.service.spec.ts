import { TestBed } from '@angular/core/testing';
import { SessionService } from './session.service';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('SessionService', () => {
  let service: SessionService;
  let identityServiceSpy: jasmine.SpyObj<IIdentityService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('IIdentityService', ['generateId']);

    TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: IIdentityService, useValue: spy }
      ]
    });

    service = TestBed.inject(SessionService);
    identityServiceSpy = TestBed.inject(IIdentityService) as jasmine.SpyObj<IIdentityService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with no active session', () => {
    const session = service.getCurrentSession();
    expect(session.id).toBe('');
    expect(session.user).toBeNull();
  });

  it('should start a session and generate an ID', () => {
    identityServiceSpy.generateId.and.returnValue('mock-uuid-123');

    service.startSession({ id: 'ulid-1', name: 'Alice', role: UserRole.OWNER });

    const session = service.getCurrentSession();
    expect(session.id).toBe('mock-uuid-123');
    expect(session.user?.name).toBe('Alice');
    expect(session.startedAt).toBeTruthy();
  });

  it('should end a session and clear data', () => {
    identityServiceSpy.generateId.and.returnValue('mock-uuid-123');
    service.startSession({ id: 'ulid-1', name: 'Alice', role: UserRole.OWNER });

    service.endSession();

    const session = service.getCurrentSession();
    expect(session.id).toBe('');
    expect(session.user).toBeNull();
    expect(session.startedAt).toBeNull();
  });
});
