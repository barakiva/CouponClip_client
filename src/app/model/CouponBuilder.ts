import {Coupon} from './coupon';

export class CouponBuilder {
  private coupon: Coupon;

  constructor() {
    this.reset();
  }
  public reset(): this {
    this.coupon = new Coupon();
    return this;
  }
  public id(id: number): this {
    this.coupon.id = id;
    return this;
  }
  public picUrl(picUrl: string): this {
    this.coupon.picUrl = picUrl;
    return this;
  }
  public title(title: string): this {
    this.coupon.title = title;
    return this;
  }
  public location(location: string): this {
    this.coupon.location = location;
    return this;
  }
  public reviewCount(reviewCount: number): this {
    this.coupon.reviewCount = reviewCount;
    return this;
  }
  public description(description: string): this {
    this.coupon.description = description;
    return this;
  }
  public averageStars(averageStars: number): this {
    this.coupon.averageStars = averageStars;
    return this;
  }
  public build(): Coupon {
    return this.coupon;
  }
}
