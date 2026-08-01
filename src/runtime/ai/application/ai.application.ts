import { Injectable } from '@angular/core';
import { AIService } from '@runtime/ai/ai.service';
import { IPermissionService } from '@shared/abstractions/permission.service.interface';
import { ISessionService } from '@shared/abstractions/session.service.interface';
import { ApplicationResponse } from '@runtime/billing/application/dto/sales.dto';
import { AIChatRequest, AIChatResponse } from '@runtime/ai/ai.model';

@Injectable({
  providedIn: 'root'
})
export class AIApplication {
  constructor(
    private readonly aiService: AIService,
    private readonly IPermissionService: IPermissionService,
    private readonly ISessionService: ISessionService
  ) {}

  getSuggestedQuestions(userId: string): ApplicationResponse<string[]> {
    return this.executeWithPermission(userId, 'AI_CHAT', () => {
      return this.aiService.getSuggestedQuestions();
    });
  }

  async askQuestion(userId: string, request: AIChatRequest): Promise<ApplicationResponse<AIChatResponse>> {
    const currentUser = this.ISessionService.getCurrentUser();
    if (!currentUser || currentUser.id !== userId) {
      return {
        success: false,
        error: {
          code: 'PERMISSION_DENIED',
          message: 'Invalid session or user mismatch.'
        }
      };
    }

    if (!this.IPermissionService.hasPermission(currentUser.role, 'AI_CHAT')) {
      return {
        success: false,
        error: {
          code: 'PERMISSION_DENIED',
          message: 'You do not have permission to access AI features.'
        }
      };
    }

    try {
      const response = await this.aiService.askQuestion(request);
      return {
        success: true,
        data: response
      };
    } catch (error: any) {
      const message = error.message || 'Unknown error occurred.';
      const code = message.startsWith('AI_UNAVAILABLE') ? 'AI_UNAVAILABLE' : 'UNKNOWN_ERROR';
      return {
        success: false,
        error: {
          code,
          message
        }
      };
    }
  }

  private executeWithPermission<T>(userId: string, permission: any, operation: () => T): ApplicationResponse<T> {
    try {
      const currentUser = this.ISessionService.getCurrentUser();
      if (!currentUser || currentUser.id !== userId) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'Invalid session or user mismatch.'
          }
        };
      }

      if (!this.IPermissionService.hasPermission(currentUser.role, permission)) {
        return {
          success: false,
          error: {
            code: 'PERMISSION_DENIED',
            message: 'You do not have permission to perform this action.'
          }
        };
      }

      const result = operation();
      return {
        success: true,
        data: result
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          code: 'UNKNOWN_ERROR',
          message: error.message || 'Unknown error occurred.'
        }
      };
    }
  }
}
