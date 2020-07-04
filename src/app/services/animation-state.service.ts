import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class AnimationStateService {
  stateSource = new Subject<any>();
  // convictState: Observable<string>;

  changeState(state: Object){
    this.stateSource.next(state);
  }
}
