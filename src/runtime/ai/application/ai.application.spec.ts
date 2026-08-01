import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { AIApplication } from './ai.application';
import { AIService } from '@runtime/ai/ai.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { IEventBus } from '@shared/abstractions/event-bus';
import { IIdentityService } from '@shared/abstractions/identity.service.interface';
import { UserRole } from '@shared/models/user.model';

describe('AIApplication', () => {
  let appContract: AIApplication;
  let sessionService: ISessionService;
  let aiService: AIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AIApplication,
        AIService,
        { provide: IPermissionService, useClass: PermissionManager },
        { provide: ISessionService, useClass: SessionService },
        { provide: IEventBus, useClass: EventBusService },
        { provide: IIdentityService, useClass: IdentityService }
      ]
    });

    appContract = TestBed.inject(AIApplication);
    sessionService = TestBed.inject(ISessionService);
    aiService = TestBed.inject(AIService);

    sessionService.startSession({
      id: 'owner-user-1',
      name: 'Owner User',
      role: UserRole.OWNER
    });
  });

  it('should get suggested questions when user has permission', () => {
    const currentUser = sessionService.getCurrentUser()!;
    const response = appContract.getSuggestedQuestions(currentUser.id);
    expect(response.success).toBeTrue();
    expect(response.data?.length).toBeGreaterThan(0);
  });

  it('should answer question when online', async () => {
    const currentUser = sessionService.getCurrentUser()!;
    const response = await appContract.askQuestion(currentUser.id, {
      question: 'Which product sold best?'
    });
    expect(response.success).toBeTrue();
    expect(response.data?.answer).toBeDefined();
  });

  it('should return AI_UNAVAILABLE error when offline', async () => {
    aiService.setConnectivity(false);
    const currentUser = sessionService.getCurrentUser()!;
    const response = await appContract.askQuestion(currentUser.id, {
      question: 'Which product sold best?'
    });
    expect(response.success).toBeFalse();
    expect(response.error?.code).toBe('AI_UNAVAILABLE');
  });
});



