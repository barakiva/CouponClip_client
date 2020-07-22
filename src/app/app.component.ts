import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {convictAnimation, overlayAnimation} from './animations/animations';
import {ConvictStateService} from './services/ConvictStateService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    convictAnimation, overlayAnimation
  ]
})
export class AppComponent implements OnInit {
  convictState = 'hidden';
  overlayState = 'hidden';
  subscription: Subscription;

  constructor(private animationStateService: ConvictStateService) {}
  ngOnInit(): void {
    this.subscription = this.animationStateService.stateSource.subscribe(data => {
      this.convictState = data['convictState'];
      this.overlayState = data['overlayState'];
    })
  }
  toggleOverlay(): void {
    this.convictState = 'hidden';
    this.overlayState = 'hidden';
  }
}
