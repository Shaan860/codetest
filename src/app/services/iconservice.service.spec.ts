import { TestBed } from '@angular/core/testing';

import { IconserviceService } from './iconservice.service';

describe('IconserviceService', () => {
  let service: IconserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
