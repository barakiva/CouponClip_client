import {Component, Input, OnInit} from '@angular/core';
import {Deal} from '../../model/deal';
import {AnimationStateService} from '../../services/animation-state.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-convict',
  templateUrl: './convict.component.html',
  styleUrls: ['./convict.component.scss']
})
export class ConvictComponent implements OnInit {
  deal: Deal;
  readonly param = '?geometry=520x300F';
  subscription: Subscription;
  constructor(private animationStateService: AnimationStateService) { }

  ngOnInit() {
    console.log("convict born");

    this.subscription = this.animationStateService.stateSource.subscribe(data => {
      this.deal = data['deal'];
      console.log(this.deal);
    })
  }
  public formatNumber(): string {
    return new Intl.NumberFormat('en-IN',
      {style: 'percent', minimumFractionDigits: 0}).format(this.deal.discountPercentage);
  }
  goToMerchant(){
      window.location.href=this.deal['url'];
  }
}
