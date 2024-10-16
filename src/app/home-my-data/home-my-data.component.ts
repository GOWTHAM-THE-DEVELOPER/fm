import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-my-data',
  templateUrl: './home-my-data.component.html',
  styleUrls: ['./home-my-data.component.scss']
})
export class HomeMyDataComponent {
  @Output() subNavChange = new EventEmitter<string>();  // Specify string type
  activeNavItem: string = 'overview';

  constructor(private router: Router) {}

  navigateToDashboard() {
    this.activeNavItem = 'dashboard';
    this.subNavChange.emit('Dashboard');  // Emit string
    this.router.navigate(['new-home/my-space', 'dashboard']);
  }

  navigateToOverview() {
    this.activeNavItem = 'overview';
    this.subNavChange.emit('Overview');  // Emit string
    this.router.navigate(['new-home/my-space', 'overview']);
  }

  navigateToCalendar() {
    this.activeNavItem = 'calendar';
    this.subNavChange.emit('Calendar');  // Emit string
    this.router.navigate(['new-home/my-space', 'calendar']);
  }
}
