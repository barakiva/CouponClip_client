import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Coupon} from "../model/coupon";

@Injectable({
  providedIn: 'root'
})
export class CouponApiService {
  public couponList: Coupon[];

  constructor() { }

  public populateCoupons(): Coupon[] {
    for (let i = 0; i < 10; i++ ) {
      let coupon = new Coupon();
      coupon.id = i;
      coupon.picUrl = 'assets/hot_dogs.jpg';
      coupon.title = 'Dougie\'s Hot Dogs';
      coupon.location = '3 Min walk from Time\'s square';
      coupon.reviewCount = 9000;
      coupon.description = 'Darn good dandy, tasty, goddamn damnable hot, hot dogs. We always like to say "It\'s like being' +
        'punched by the devil if the devil had tasty hot dogs as hands." Get yourself some doggone dogs before they will be dog-gone.' +
        'Even we don\'t know what that means, but we don\'t care about anything other than making great damn hot dogs, even dog-gone logic.';
      coupon.averageStars = 4.7;
      this.couponList[i] = coupon;
    }
    return this.couponList;
  }


}
