import {Component, HostListener, OnInit} from '@angular/core';
import {Deal} from '../../model/deal';
import {ConvictStateService} from '../../services/ConvictStateService';
import {Subscription} from 'rxjs';
import {CouponUtilityService} from '../../services/coupon-utility.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-convict',
  templateUrl: './convict.component.html',
  styleUrls: ['./convict.component.scss']
})
export class ConvictComponent implements OnInit {
  deal: Deal;
  readonly pictureApiParams = '?geometry=520x300F';
  lineupDealSubscription: Subscription;
  descriptionCharLimit: number;

  constructor(private animationStateService: ConvictStateService,
              public couponUtility: CouponUtilityService) { }

  ngOnInit() {
    this.lineupDealSubscription = this.animationStateService.dealSource.subscribe(data => {
      this.deal = data;
    })
  }


  closeConvict() {
    this.animationStateService.changeState({
      convictState: 'hidden',
      overlayState: 'hidden'
    })
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log("resizing window");
    this.setCharacterLimit();
  }
  setCharacterLimit(): void{
    const breakPoints = [
      {'device': 'mobile', width:499},
      {'device': 'tablet', width:768},
      {'device': 'laptop', width:1028},
      {'device': 'desktop', width:1440},
      {'device': 'widescreen', width:1920},
    ]

    let result = _
      .chain(breakPoints)
      .sortBy('width').reverse()
      .filter(device => device.width <= window.innerWidth)
      .head()
      .value();

    let isMobile = result.width <= breakPoints[0].width;
    let isTablet = result.width <= breakPoints[1].width;
    let isLaptopAndHigher = result.width >= breakPoints[2].width;

    if (isMobile) {this.descriptionCharLimit = 68}
    if (isTablet) {this.descriptionCharLimit = 128}
    if (isLaptopAndHigher) {this.descriptionCharLimit = 330}
  }
  isDealDescriptionTooLong(): boolean{
    this.setCharacterLimit();
    console.log(this.descriptionCharLimit);
    return this.deal.description.length > this.descriptionCharLimit;
  }

  isDealTitleTooLong(): boolean {
    return this.deal.shortTitle.length>30;
  }

  goToMerchant(){
    window.location.href=this.deal['url'];
  }
}
