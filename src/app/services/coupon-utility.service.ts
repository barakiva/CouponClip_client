import { Injectable } from '@angular/core';
import {Deal} from '../model/deal';

@Injectable({
  providedIn: 'root'
})
export class CouponUtilityService {

  constructor() { }

  public formatPercentage(deal: Deal): string {
    return new Intl.NumberFormat('en-IN',
      {style: 'percent', minimumFractionDigits: 0}).format(deal.discountPercentage);
  }

  public formatPrice(deal: Deal): string {
    console.log(new Intl.NumberFormat('en-IN',
      {minimumFractionDigits: 2}).format(deal.discountPercentage));
    return new Intl.NumberFormat('en-IN',
      {minimumFractionDigits: 2}).format(deal.discountPercentage);
  }

  public randomizeReviews(): number {
    // console.log(Math.floor(this.randomIntFromInterval(1000,10000)));
    return Math.floor(this.randomIntFromInterval(1000,10000));
  }
  public randomizeRating(): number {
    return this.randomIntFromInterval(3,5);
  }
  public randomIntFromInterval(min, max): number {
    return Math.random() * (max - min + 1) + min;
  }
}
