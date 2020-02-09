import {Coupon} from "./coupon";

export class CouponBuilder {
  private coupon : Coupon;

  constructor() {
    this.reset();
  }
  public reset(): void {
    this.coupon = new Coupon();
  }
  public id(id: number): void {
    this.coupon.id = id;
  }
  public picUrl(picUrl: string): void {
    this.coupon.picUrl = picUrl;
  }
  public title(title: string): void {
    this.coupon.title = title;
  }
  public location(location: string): void {
    this.coupon.location = location;
  }
  public reviewCount(reviewCount: number): void {
    this.coupon.reviewCount =reviewCount;
  }
  public description(description: string): void {
    this.coupon.description = description;
  }
  public averageStars(averageStars: number): void {
    this.coupon.averageStars = averageStars;
  }
  public build(): Coupon {
    return this.coupon;
  }
}
