import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  activeNavItem: string = 'leave-reportees';
  @Output() subNavChange = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.activeNavItem = params['section'] || 'leave-reportees';
    });
  }

  navigateToLeaveReportees() {
    this.activeNavItem = 'leave-reportees';
    this.router.navigate(['leave-tracking/teams/leave-reportees']);
    this.subNavChange.emit('leave-reportees');
  }

  navigateToOnLeave() {
    this.activeNavItem = 'on-leave';
    this.router.navigate(['leave-tracking/teams/on-leave']);
    this.subNavChange.emit('on-leave');
  }

  navigateToLeaveRequest() {
    this.activeNavItem = 'approval-leave-request';
    this.subNavChange.emit('approval-leave-request');
  }
}
