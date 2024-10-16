import { Component } from '@angular/core';
import { slideInAnimation } from './animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideInAnimation]

})
export class HeaderComponent {

  activeNavItem: string = 'general';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  selectTab(tabName: string) {
    this.activeNavItem = tabName;
  }

}
