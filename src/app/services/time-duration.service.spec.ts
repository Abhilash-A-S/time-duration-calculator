import { TestBed } from '@angular/core/testing';

import { TimeDurationService } from './time-duration.service';

describe('TimeDurationService', () => {
  let service: TimeDurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeDurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
