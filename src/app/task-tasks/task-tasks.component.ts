import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-tasks',
  templateUrl: './task-tasks.component.html',
  styleUrl: './task-tasks.component.scss'
})
export class TaskTasksComponent {
    
  activeNavItem: string = 'tasks';
  activeSubNavItem: string = 'my-task'

  constructor(private router : Router) {}

  navigateTasks()
  {
    this.activeNavItem = 'tasks';
    this.activeSubNavItem = 'My Task'; 
    this.router.navigate(['tasks']);
  }

  navigateCheckLists()
  {
    this.activeNavItem = 'checkLists';
    this.activeSubNavItem = ''; 
    this.router.navigate(['tasks']);
  }

  updateBreadcrumb(subNav: any) {
    this.activeSubNavItem = subNav;
  }  
}
