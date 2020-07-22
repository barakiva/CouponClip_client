import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Deal} from '../model/deal';

@Injectable({
  providedIn: 'root',

})
export class ConvictStateService {
  stateSource = new Subject<Object>();
  dealSource = new Subject<Deal>();

  changeState(state: Object) {
    this.stateSource.next(state);
  }
  loadDeal(deal: Deal) {
    this.dealSource.next(deal);
  }
}
