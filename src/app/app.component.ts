import {Component, OnDestroy, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Subscription} from 'rxjs';
import {convictAnimation, overlayAnimation} from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    convictAnimation, overlayAnimation
  ]

})
export class AppComponent implements OnInit {

  title = 'Couponly';
  convictState = 'hidden';
  overlayState = 'hidden';

  subscription: Subscription;

  receiveMessage($event) {
    console.log($event);
    this.convictState = $event['convictState'];
    this.overlayState = $event['overlayState'];
  }
  toggleOverlay(): void {
    this.convictState = 'hidden';
    this.overlayState = 'hidden';
  }
  ngOnInit(): void {

  }
}
