import { Provider } from '@angular/core';
import { ReportService } from './report.service';
import { ReportApplication } from './application/report.application';

export const reportProviders: Provider[] = [
  ReportService,
  ReportApplication
];
