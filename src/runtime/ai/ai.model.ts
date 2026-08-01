/**
 * AI Domain Models & Interfaces
 * Specification: docs/specifications/AI.md
 */

export type AICapabilityLevel = 'DISABLED' | 'BASIC' | 'ADVANCED';

export interface AIChatRequest {
  question: string;
  contextParams?: Record<string, any>;
}

export interface AIChatResponse {
  answer: string;
  suggestedNextActions?: string[];
  generatedAt: string;
}

export interface AIInsight {
  id: string;
  title: string;
  summary: string;
  recommendation: string;
  type: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  generatedAt: string;
}
