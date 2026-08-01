import { AIChatRequest, AIChatResponse, AIInsight } from './ai.model';

export const AI_EVENT_TYPES = {
  AI_CHAT_REQUESTED: 'AIChatRequested',
  AI_CHAT_COMPLETED: 'AIChatCompleted',
  DAILY_INSIGHT_GENERATED: 'DailyInsightGenerated',
  WEEKLY_INSIGHT_GENERATED: 'WeeklyInsightGenerated'
} as const;

export interface AIChatRequestedPayload {
  request: AIChatRequest;
}

export interface AIChatCompletedPayload {
  response: AIChatResponse;
}

export interface AIInsightGeneratedPayload {
  insight: AIInsight;
}
