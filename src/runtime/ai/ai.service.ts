import { BusinessException } from '@shared/exceptions/business.exception';
import { Injectable } from '@angular/core';
import { IEventBus } from '@shared/abstractions/event-bus';
import { AICapabilityLevel, AIChatRequest, AIChatResponse } from './ai.model';
import { AI_EVENT_TYPES } from './ai-events';

@Injectable({
  providedIn: 'root'
})
export class AIService {
  private capabilityLevel: AICapabilityLevel = 'BASIC';
  private internetAvailable = true;

  constructor(private readonly eventBus: IEventBus) {}

  getCapabilityLevel(): AICapabilityLevel {
    return this.capabilityLevel;
  }

  setCapabilityLevel(level: AICapabilityLevel): void {
    this.capabilityLevel = level;
  }

  setConnectivity(isOnline: boolean): void {
    this.internetAvailable = isOnline;
  }

  getSuggestedQuestions(): string[] {
    return [
      "Why are today's sales low?",
      'Which products sold the most?',
      'Which offer performed best?',
      'What should I promote tomorrow?',
      'How can I improve sales?'
    ];
  }

  /**
   * Submits a question to the AI Gateway.
   * Throws an error if AI capability is DISABLED or internet connection is missing (AI.md §4 & §11).
   */
  async askQuestion(request: AIChatRequest): Promise<AIChatResponse> {
    if (this.capabilityLevel === 'DISABLED') {
      throw new BusinessException('AI_UNAVAILABLE', 'AI feature is currently disabled by license or settings.');
    }

    if (!this.internetAvailable) {
      throw new BusinessException('AI_UNAVAILABLE', 'AI Chat requires an active internet connection.');
    }

    this.eventBus.publish(AI_EVENT_TYPES.AI_CHAT_REQUESTED, { request });

    // AI Gateway Orchestrator stub response (actual execution happens on Cloud Spring Boot API)
    const response: AIChatResponse = {
      answer: `Based on your recent business data, here is the analysis for: "${request.question}"`,
      suggestedNextActions: [
        'Review top selling items',
        'Create a weekend bundle offer'
      ],
      generatedAt: new Date().toISOString()
    };

    this.eventBus.publish(AI_EVENT_TYPES.AI_CHAT_COMPLETED, { response });
    return response;
  }
}
