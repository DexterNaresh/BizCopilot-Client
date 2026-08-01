import { TestBed } from '@angular/core/testing';
import { LogService } from './log.service';
import { LogLevel } from '@shared/abstractions/log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
    });
    service = TestBed.inject(LogService);
  });

  it('should capture and store log entries', () => {
    service.info('Billing', 'Bill created', { billId: '01HXXX' });
    const logs = service.getRecentLogs();
    expect(logs.length).toBe(1);
    expect(logs[0].category).toBe('Billing');
    expect(logs[0].level).toBe(LogLevel.INFO);
  });

  it('should retain up to max limit', () => {
    for (let i = 0; i < 600; i++) {
      service.debug('Test', `Message ${i}`);
    }
    const logs = service.getRecentLogs();
    expect(logs.length).toBe(500);
  });
});
