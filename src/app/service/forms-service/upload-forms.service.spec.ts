import { TestBed } from '@angular/core/testing';

import { UploadFormsService } from './upload-forms.service';

describe('UploadFormsService', () => {
  let service: UploadFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
