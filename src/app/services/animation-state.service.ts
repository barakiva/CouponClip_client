import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class AnimationStateService {

  convictState: Observable<string>;
  overlayState = 'hidden';

  convictStateSubject: Subject<string>;
  overlayStateSubject: Subject<string>;

  constructor() {
    this.convictState
  }
}
