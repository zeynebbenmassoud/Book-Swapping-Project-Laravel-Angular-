import { TestBed } from '@angular/core/testing';

import { AuthGuardAfterService } from './auth-guard-after.service';

describe('AuthGuardAfterService', () => {
  let service: AuthGuardAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
