import { Component, OnInit } from '@angular/core';
import {Coupon} from "../../model/coupon";
import {CouponApiService} from "../../services/coupon-api.service";

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  couponList: Coupon[];
  hack: boolean = false;
  constructor(private couponApiService: CouponApiService) { }

  ngOnInit() {
  }
  hackIt(){
    this.couponList = this.couponApiService.populateCoupons();
    this.hack = true;
  }

}
