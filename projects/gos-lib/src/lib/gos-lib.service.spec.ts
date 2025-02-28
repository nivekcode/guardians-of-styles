import { TestBed } from '@angular/core/testing';

import { GosLibService } from './gos-lib.service';

describe('GosLibService', () => {
  let service: GosLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GosLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
