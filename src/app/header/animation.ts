import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate('800ms ease-in-out', style({ opacity: 5, transform: 'translateY(0)' }))
  ])
]);
