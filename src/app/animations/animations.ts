import {animate, state, style, transition, trigger} from '@angular/animations';

class Animations {

}
export const convictAnimation =
  trigger('convictState', [
    state('hidden', style({
      transform: 'translateX(560px)'
    })),
    state('shown', style({
      transform: 'translateX(0px)'
    })),
    transition('hidden <=> shown', animate('250ms ease-out'))
  ]);
export const overlayAnimation =
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
    transition('hidden <=> shown', animate('250ms ease-out'))
  ]);
