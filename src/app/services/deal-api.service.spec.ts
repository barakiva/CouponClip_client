import { TestBed } from '@angular/core/testing';

import { DealApiService } from './deal-api.service';

describe('DealApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealApiService = TestBed.get(DealApiService);
    expect(service).toBeTruthy();
  });
});
