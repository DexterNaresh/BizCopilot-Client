import { TestBed } from '@angular/core/testing';
import { IdentityService } from './identity.service';

describe('IdentityService', () => {
  let service: IdentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate valid UUID v7 for IDs', () => {
    const id1 = service.generateId();
    const id2 = service.generateId();
    expect(id1).toBeTruthy();
    expect(id2).toBeTruthy();
    expect(id1).not.toEqual(id2);
    expect(id1.length).toBe(36);
  });
});
