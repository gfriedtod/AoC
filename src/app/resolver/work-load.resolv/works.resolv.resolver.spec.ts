import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { worksResolvResolver } from './works.resolv.resolver';

describe('worksResolvResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => worksResolvResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
