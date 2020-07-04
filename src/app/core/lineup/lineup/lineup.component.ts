import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DealApiService} from '../../../services/deal-api.service';
import {Observable, Subscription} from 'rxjs';
import {DealWrapper} from '../../../model/deal-wrapper';
import {Deal} from '../../../model/deal';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit, OnDestroy {
  deals = [];
  subscription: Subscription;
  constructor(private dealAPi: DealApiService) { }

  convictState = "hidden";
  overlayState = "hidden";

  @Output() event = new EventEmitter<Object>();

  toggleConvict(deal: Deal): void {
    this.convictState =  "shown";
    this.overlayState =  "shown";
    console.log(this.convictState);
    let obj = {
      convictState: this.convictState,
      overlayState: this.overlayState,
      deal: deal
    }

    this.event.emit(obj);
  }

  ngOnInit() {
    this.subscription = this.dealAPi.subject.subscribe(data => {
      this.deals = data;
    })
    this.dealAPi.makeRequest( {location: 'nyc', query: ''})
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
