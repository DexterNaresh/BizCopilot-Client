import { Observable } from 'rxjs';

/**
 * Base Typed Domain Event
 */
export interface DomainEvent<T = any> {
  eventType: string;
  timestamp: string;
  payload: T;
}

/**
 * BizCopilot Event Bus Abstraction
 */
export abstract class IEventBus {
  abstract publish<T>(eventType: string, payload: T): void;
  abstract on<T>(eventType: string): Observable<T>;
}
