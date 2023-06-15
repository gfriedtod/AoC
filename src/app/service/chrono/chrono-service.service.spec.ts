import { TestBed } from '@angular/core/testing';

import { ChronoServiceService } from './chrono-service.service';

describe('ChronoServiceService', () => {
  let service: ChronoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChronoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
