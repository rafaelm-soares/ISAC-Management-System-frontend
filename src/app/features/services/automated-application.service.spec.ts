import { TestBed } from '@angular/core/testing';

import { AutomatedApplicationService } from './automated-application.service';

describe('AutomatedApplicationService', () => {
  let service: AutomatedApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomatedApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
