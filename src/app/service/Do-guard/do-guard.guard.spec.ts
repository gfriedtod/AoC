import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { doGuardGuard } from './do-guard.guard';

describe('doGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => doGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
