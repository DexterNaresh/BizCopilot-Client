import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LocalStorageService] });
    service = TestBed.inject(LocalStorageService);
  });

  it('should return valid database filename', () => {
    expect(service.getDatabaseFileName()).toBe('bizcopilot.db');
  });

  it('should return non-empty storage paths', () => {
    const paths = service.getStoragePaths();
    expect(paths.databasePath).toContain('bizcopilot.db');
    expect(paths.backupPath).toBeTruthy();
    expect(paths.exportPath).toBeTruthy();
    expect(paths.logPath).toBeTruthy();
  });
});

