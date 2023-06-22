import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { countriesViewResolvResolver } from './countries-view-resolv.resolver';

describe('countriesViewResolvResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => countriesViewResolvResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
