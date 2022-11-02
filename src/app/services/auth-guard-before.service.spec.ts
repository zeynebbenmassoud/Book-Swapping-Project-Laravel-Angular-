import { TestBed } from '@angular/core/testing';

import { AuthGuardBeforeService } from './auth-guard-before.service';

describe('AuthGuardBeforeService', () => {
  let service: AuthGuardBeforeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardBeforeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
