import { TestBed } from '@angular/core/testing';

import { ClinicFilterService } from './clinic-filter.service';

describe('ClinicFilterService', () => {
  let service: ClinicFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
