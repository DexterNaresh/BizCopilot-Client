import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hash a plaintext string securely', async () => {
    const hash1 = await service.hashCredentials('password123');
    const hash2 = await service.hashCredentials('password123');
    const hash3 = await service.hashCredentials('different');

    expect(hash1).toBeTruthy();
    expect(hash1).toEqual(hash2); // Same input produces same hash
    expect(hash1).not.toEqual(hash3); // Different input produces different hash
  });

  it('should validate credentials correctly', async () => {
    const storedHash = await service.hashCredentials('my-secret-pin');
    
    const isValid = await service.validateCredentials('my-secret-pin', storedHash);
    const isInvalid = await service.validateCredentials('wrong-pin', storedHash);

    expect(isValid).toBeTrue();
    expect(isInvalid).toBeFalse();
  });
});
