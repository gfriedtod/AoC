import { TestBed } from '@angular/core/testing';

import { CountriesLoaderServService } from './countries-loader-serv.service';

describe('CountriesLoaderServService', () => {
  let service: CountriesLoaderServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesLoaderServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
