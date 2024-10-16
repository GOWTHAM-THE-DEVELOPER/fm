import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss']
})
export class NewHomeComponent {
  activeNavItem: string = 'my-space';
  activeSubNavItem: string= 'Overview' ;

  constructor(private router: Router) {}

  navigateToMySpace() {
    this.activeNavItem = 'my-space';
    this.activeSubNavItem = 'Overview'; 
    this.router.navigate(['my-space']);
  }

  teamsDashboardNavigate() {
    this.activeNavItem = 'teams-dashboard';
    this.activeSubNavItem = 'Team Space';
    this.router.navigate(['/teams-dashboard']);    
  }

  navigateToOrganization() {
    this.activeNavItem = 'organization';
    this.activeSubNavItem = 'Announcements';
    this.router.navigate(['organization']);
  }

  updateBreadcrumb(subNav: any) {
    this.activeSubNavItem = subNav;
  }
}
