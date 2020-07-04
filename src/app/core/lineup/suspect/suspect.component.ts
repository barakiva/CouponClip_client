import {Component, Input, OnInit} from '@angular/core';
import {CouponUtilityService} from '../../../services/coupon-utility.service';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.scss']
})
export class SuspectComponent implements OnInit {
  @Input() deal;
  readonly param = '?geometry=319x188F';
  reviews: number;
  ratings: number;

  constructor(private couponUtility: CouponUtilityService) {
    this.reviews = this.couponUtility.randomizeReviews();
    this.ratings = this.couponUtility.randomizeRating();
  }

  ngOnInit() {
  }
  get _couponUtility(): CouponUtilityService{
    return this.couponUtility;
  }
}
