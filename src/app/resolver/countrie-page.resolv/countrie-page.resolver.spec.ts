import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { countriePageResolver } from './countrie-page.resolver';

describe('countriePageResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => countriePageResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
