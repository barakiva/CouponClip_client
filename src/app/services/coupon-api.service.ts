import {Injectable} from '@angular/core';
import {Coupon} from "../model/coupon";
import {CouponBuilder} from "../model/CouponBuilder";

@Injectable({
  providedIn: 'root'
})
export class CouponApiService {
  private couponList: Array<Coupon> = new Array<Coupon>(10);
  public couponBuilder: CouponBuilder = new CouponBuilder();

  constructor() { }

  public populateCoupons(): Coupon[] {
    for (let i = 0; i < 10; i++ ) {
      this.couponBuilder.reset();
      this.couponList[i] = this.couponBuilder
        .id(i)
        .picUrl('assets/hot_dogs.jpg')
        .title('Dougie\'s Hot Dogs')
        .location('3 Min walk from Time\'s square')
        .reviewCount(9000)
        .description('Darn good dandy, tasty, goddamn damnable hot, hot dogs. We always like to say "It\'s like being' +
          'punched by the devil if the devil had tasty hot dogs as hands." Get yourself some doggone dogs before they will be dog-gone.' +
          'Even we don\'t know what that means, but we don\'t care about anything other than making great ' +
          'damn hot dogs, even dog-gone logic.')
        .averageStars(4.7)
        .build();
    }
    return this.couponList;
  }


}
