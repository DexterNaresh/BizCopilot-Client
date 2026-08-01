import { TestBed } from '@angular/core/testing';
import { EventBusService } from './event-bus.service';

describe('EventBusService', () => {
  let service: EventBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventBusService]
    });
    service = TestBed.inject(EventBusService);
  });

  it('should publish and receive typed events', (done) => {
    const testPayload = { billId: '01HXXX', grandTotal: 150 };

    service.on<{ billId: string; grandTotal: number }>('BillCreated').subscribe(payload => {
      expect(payload).toEqual(testPayload);
      done();
    });

    service.publish('BillCreated', testPayload);
  });

  it('should filter out unrelated events', (done) => {
    let receivedOther = false;

    service.on('TaxSettingsChanged').subscribe(() => {
      receivedOther = true;
    });

    service.on<{ count: number }>('ProductUpdated').subscribe(payload => {
      expect(payload.count).toBe(5);
      expect(receivedOther).toBeFalse();
      done();
    });

    service.publish('ProductUpdated', { count: 5 });
  });
});
