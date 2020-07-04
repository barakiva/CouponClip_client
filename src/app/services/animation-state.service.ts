import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class AnimationStateService {
  stateSource = new Subject<any>();
  // currentState = this.stateSource.asObservable();

  convictState: Observable<string>;
  overlayState = 'hidden';

  convictStateSubject: Subject<string>;
  overlayStateSubject: Subject<string>;

  constructor() {
  }

  changeState(state: Object){
    this.stateSource.next(state);
  }
}
