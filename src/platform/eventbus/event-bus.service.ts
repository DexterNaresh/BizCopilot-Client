import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DomainEvent, IEventBus } from '@shared/abstractions/event-bus';

@Injectable()
export class EventBusService implements IEventBus {
  private readonly bus$ = new Subject<DomainEvent>();

  /**
   * Publishes a typed domain event to the bus.
   */
  publish<T>(eventType: string, payload: T): void {
    this.bus$.next({
      eventType,
      timestamp: new Date().toISOString(),
      payload
    });
  }

  /**
   * Subscribes to events of a specific type.
   */
  on<T>(eventType: string): Observable<T> {
    return this.bus$.pipe(
      filter(event => event.eventType === eventType),
      map(event => event.payload as T)
    );
  }
}
