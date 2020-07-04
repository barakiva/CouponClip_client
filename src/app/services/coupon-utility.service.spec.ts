import { TestBed } from '@angular/core/testing';

import { CouponUtilityService } from './coupon-utility.service';

describe('CouponUtilityService', () => {
  let service: CouponUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
