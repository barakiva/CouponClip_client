import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Deal} from '../model/deal';

@Injectable({
  providedIn: 'root',

})
export class AnimationStateService {
  stateSource = new Subject<Object>();
  dealSource = new Subject<Deal>();
  // convictState: Observable<string>;

  changeState(state: Object) {
    this.stateSource.next(state);
  }
  loadDeal(deal: Deal) {
    this.dealSource.next(deal);
  }
}