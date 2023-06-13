import { TestBed } from '@angular/core/testing';

import { WorksServiceService } from './works.service.service';

describe('WorksServiceService', () => {
  let service: WorksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
