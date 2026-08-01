import { QueueStorage } from '@platform/synchronization/queue.storage';
import { IdentityService } from '@platform/identity/identity.service';
import { ConfigProviderService } from '@platform/configuration/config-provider.service';
import { EventBusService } from '@platform/eventbus/event-bus.service';
import { SessionService } from '@platform/authentication/session.service';
import { PermissionManager } from '@platform/authentication/permission.service';
import { TestBed } from '@angular/core/testing';
import { AIService } from './ai.service';
import { IEventBus } from '@shared/abstractions/event-bus';
import { AI_EVENT_TYPES } from './ai-events';

describe('AIService', () => {
  let service: AIService;
  let eventBus: IEventBus;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AIService, { provide: IEventBus, useClass: EventBusService }]
    });
    service = TestBed.inject(AIService);
    eventBus = TestBed.inject(IEventBus);
  });

  it('should return suggested questions list', () => {
    const questions = service.getSuggestedQuestions();
    expect(questions.length).toBeGreaterThan(0);
    expect(questions[0]).toContain('sales');
  });

  it('should ask question successfully and emit events', async () => {
    let requestedPublished = false;
    let completedPublished = false;

    eventBus.on(AI_EVENT_TYPES.AI_CHAT_REQUESTED).subscribe(() => {
      requestedPublished = true;
    });

    eventBus.on(AI_EVENT_TYPES.AI_CHAT_COMPLETED).subscribe(() => {
      completedPublished = true;
    });

    const response = await service.askQuestion({ question: 'Which products sold most?' });
    expect(response.answer).toBeDefined();
    expect(requestedPublished).toBeTrue();
    expect(completedPublished).toBeTrue();
  });

  it('should throw error if offline', async () => {
    service.setConnectivity(false);
    await expectAsync(service.askQuestion({ question: 'Test' })).toBeRejectedWithError(
      /AI_UNAVAILABLE: AI Chat requires an active internet connection/
    );
  });

  it('should throw error if AI feature is disabled', async () => {
    service.setCapabilityLevel('DISABLED');
    await expectAsync(service.askQuestion({ question: 'Test' })).toBeRejectedWithError(
      /AI_UNAVAILABLE: AI feature is currently disabled/
    );
  });
});



