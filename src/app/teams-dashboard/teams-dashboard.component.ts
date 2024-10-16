import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-dashboard',
  templateUrl: './teams-dashboard.component.html',
  styleUrl: './teams-dashboard.component.scss'
})
export class TeamsDashboardComponent {

  activeNavItem: string = 'team-space';
  @Output() subNavChange = new EventEmitter<string>();  // Emit string for breadcrumb

  constructor(private router : Router) {}

  navigateToMySpace()
  {
    this.activeNavItem = 'team-space';
    this.subNavChange.emit('Team Space');

    this.router.navigate(['new-Home/teams-dashboard', 'team-space']);
  }

  navigateToReportees()
  {
    this.activeNavItem = 'team-reportees';
    this.subNavChange.emit('Reportees');
    this.router.navigate(['new-Home/teams-dashboard', 'team-reportees']);
  }

  navigateToDepartment()
  {
    this.activeNavItem = 'department';
    this.subNavChange.emit('Department');
    this.router.navigate(['new-Home/teams-dashboard', 'department']);
  }

  navigateToProjects()
  {
    this.activeNavItem = 'projects';
    this.subNavChange.emit('Projects');

    this.router.navigate(['new-Home/teams-dashboard', 'projects'])
  }

  navigateToTeamList()
  {
    this.activeNavItem = 'team-list';
    this.subNavChange.emit('Team List');
    this.router.navigate(['new-Home/teams-dashboard', 'team-list']);
  }

}
