import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  [x: string]: any;
  title = 'fleet-management';
  activeLink: string = 'home';
  columnDefs = [];
  rowDefs = [];
  perfomance: string = 'Performance';
  icons = 'fa-solid fa-trophy';
  isExpanded = true;
  isConfigurationExpanded = false;
  showPopup = true;

  constructor(private router: Router) {}

  handleSidebarToggle() {
    this.isExpanded = !this.isExpanded;
  }

  toggleConfiguration() {
    this.isConfigurationExpanded = !this.isConfigurationExpanded;
  }

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }

  headerNavigate() {
    this.activeLink = 'profile';
    this.router.navigate(['/header']);
  }

  leaveTrackingNavigate() {
    this.activeLink = 'leave';
    this.router.navigate(['/leave-tracking']);
  }

  goalsNavigate() {
    this.activeLink = 'goals';
    this.router.navigate(['perfomance-myData']);
  }

  tasksNavigate() {
    this.activeLink = 'task';
    this.router.navigate(['task-tasks']);
  }

  newHomeNavigate() {
    this.activeLink = 'home';
    this.router.navigate(['new-Home']);
  }

  OnboardingNavigate() {
    this.activeLink = 'onboarding';
    this.router.navigate(['onboarding']);
  }

  operationNavigate(){
    this.activeLink = 'operation';
    this.router.navigate(['operation']);
  }
  reportsNavigate(){
    this.activeLink = 'reports';
    this.router.navigate(['reports']);
  }

  taskNavigate() {
    this.activeLink = 'task';
    this.router.navigate(['task-tasks']);
  }
  togglePopup() {
    this.showPopup = false;
  }

  setActiveLink(link: string) {
    this.activeLink = link; // Set the active link based on user interaction
  }
}
