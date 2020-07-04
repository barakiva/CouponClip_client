import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('convictState',[
      state('hidden', style({
        transform: 'translateX(-100%)'
      })),
      state('shown', style({
        transform: 'translateX(0%)'
      })),
      transition('hidden <=> shown', animate('250ms ease-out'))
    ]),
    trigger('overlayState', [
      state('hidden', style({
        opacity: '0',
        backgroundColor: 'transparent',
        visibility: 'hidden'
        })),
        state('shown', style({
          opacity: '1',
          backgroundColor: 'hsla(60,9%,96%,.5',
          visibility: 'visible'
        })),
      transition('hidden <=> shown' , animate('250ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'Couponly';
  convictState = "hidden";
  overlayState = "hidden";

  toggleConvict() {
    console.log(this.convictState);
    this.convictState === "hidden" ? this.convictState = "shown" : this.convictState = "hidden";
    this.overlayState === "hidden" ? this.overlayState = "shown" : this.overlayState = "hidden";
  }
}
