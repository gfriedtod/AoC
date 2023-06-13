import { TestBed } from '@angular/core/testing';

import { CountriePageService } from './countrie-page.service';

describe('CountriePageService', () => {
  let service: CountriePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
