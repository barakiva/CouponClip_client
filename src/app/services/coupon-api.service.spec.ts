import { TestBed } from '@angular/core/testing';

import { CouponApiService } from './coupon-api.service';

describe('CouponApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouponApiService = TestBed.get(CouponApiService);
    expect(service).toBeTruthy();
  });
});
