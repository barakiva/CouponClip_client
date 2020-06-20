import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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

  ngOnInit() {
    this.subscription = this.dealAPi.subject.subscribe(data => {
      this.deals = data;
    })
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
