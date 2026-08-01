import { IReportRepository } from './repositories/report.repository.interface';
import { TestBed } from '@angular/core/testing';
import { ReportService } from './report.service';


describe('ReportService', () => {
  let service: ReportService;
  let repoSpy: any;

  beforeEach(() => {
    repoSpy = jasmine.createSpyObj('IReportRepository', ['getSalesSummary', 'getSalesTrend']);

    TestBed.configureTestingModule({
      providers: [
        ReportService,
        { provide: IReportRepository, useValue: repoSpy }
      ]
    });
    service = TestBed.inject(ReportService);
  });

  describe('Validation', () => {
    it('should throw if from_date is after to_date', () => {
      expect(() => {
        service.getSalesSummary({ from_date: '2026-07-31', to_date: '2026-07-01', userId: '1', sessionId: 's1' });
      }).toThrowError('VALIDATION_FAILED: from_date cannot be after to_date.');
    });

    it('should delegate to repo if dates are valid', () => {
      repoSpy.getSalesSummary.and.returnValue({ totalBills: 0 } as any);
      service.getSalesSummary({ from_date: '2026-07-01', to_date: '2026-07-31', userId: '1', sessionId: 's1' });
      expect(repoSpy.getSalesSummary).toHaveBeenCalledWith('2026-07-01', '2026-07-31');
    });
  });

  describe('Trend', () => {
    it('should structure the Trend result properly', () => {
      repoSpy.getSalesTrend.and.returnValue([]);
      const result = service.getSalesTrend({ grouping: 'WEEK', userId: '1', sessionId: 's1' });
      expect(result.grouping).toBe('WEEK');
      expect(result.dataPoints.length).toBe(0);
      expect(repoSpy.getSalesTrend).toHaveBeenCalledWith('WEEK', undefined, undefined);
    });
  });
});
