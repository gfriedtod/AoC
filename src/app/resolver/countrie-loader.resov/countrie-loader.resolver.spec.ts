import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { countrieLoaderResolver } from './countrie-loader.resolver';

describe('countrieLoaderResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => countrieLoaderResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
