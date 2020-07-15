import {Component, OnDestroy, OnInit} from '@angular/core';
import {DealApiService} from '../../../services/deal-api.service';
import {Subscription} from 'rxjs';
import {Deal} from '../../../model/deal';
import {AnimationStateService} from '../../../services/animation-state.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit, OnDestroy {
  deals = [];
  subscription: Subscription;
  constructor(private dealAPi: DealApiService,
              private animationStateService: AnimationStateService) { }

  toggleConvict(deal: Deal): void {
    let state = {
      convictState: "shown",
      overlayState: "shown",
    }
    this.animationStateService.loadDeal(deal);
    this.animationStateService.changeState(state);
  }

  ngOnInit() {
    this.subscription = this.dealAPi.subject.subscribe(data => {
      console.log(data);
      this.deals = data;
    })
    this.dealAPi.makeRequest( {location: 'nyc', query: ''})
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
