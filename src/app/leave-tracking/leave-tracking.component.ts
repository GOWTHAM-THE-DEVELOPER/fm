// src/app/leave-tracking/leave-tracking.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-tracking',
  templateUrl: './leave-tracking.component.html',
  styleUrls: ['./leave-tracking.component.scss']
})
export class LeaveTrackingComponent {
  activeNavItem: string = 'mydata';
  activeSubNavItem: string = 'leave-summary';
  constructor(private router: Router) {}

  navigateToMyData() {
    this.activeNavItem = 'mydata';
    this.activeSubNavItem = 'leave-summary';
  }

  navigateToTeams() {
    this.activeNavItem = 'teams';
    this.activeSubNavItem = 'leave-reportees';

  }
  updateSubBreadcrumb(subNav: string) {
    this.activeSubNavItem = subNav;
  }
}
