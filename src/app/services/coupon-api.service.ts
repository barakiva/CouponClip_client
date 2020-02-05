import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Coupon} from "../model/coupon";

@Injectable({
  providedIn: 'root'
})
export class CouponApiService {

  constructor(public couponList: Coupon[]) { }

  public populateCoupons(): Coupon[] {
    for (let i = 0; i < 10; i++ ) {
      this.couponList[i].id = i;
      this.couponList[i].picUrl = 'assets/hot_dogs.jpg';
      this.couponList[i].title = 'Dougie\'s Hot Dogs';
      this.couponList[i].location = '3 Min walk from Time\'s square';
      this.couponList[i].reviewCount = 9000;
      this.couponList[i].description = 'Darn good dandy, tasty, goddamn damnable hot, hot dogs. We always like to say "It\'s like being' +
        'punched by the devil if the devil had tasty hot dogs as hands." Get yourself some doggone dogs before they will be dog-gone.' +
        'Even we don\'t know what that means, but we don\'t care about anything other than making great damn hot dogs, even dog-gone logic.';
      this.couponList[i].averageStars = 4.7;
    }
    return this.couponList;
  }


}
