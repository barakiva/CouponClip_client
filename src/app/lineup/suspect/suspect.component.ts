import { Component, OnInit } from '@angular/core';
import {CouponApiService} from "../../services/coupon-api.service";
import {Coupon} from "../../model/coupon";

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.scss']
})
export class SuspectComponent implements OnInit {

  couponList: Coupon[];
  constructor(private couponApiService: CouponApiService) { }
  ngOnInit() {
    this.couponList = this.couponApiService.populateCoupons();
  }
}
