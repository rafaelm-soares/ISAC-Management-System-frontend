import { TestBed } from '@angular/core/testing';

import { UipathService } from './uipath.service';

describe('UipathService', () => {
  let service: UipathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UipathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
