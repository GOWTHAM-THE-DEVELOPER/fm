import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-navs',
  templateUrl: './task-navs.component.html',
  styleUrl: './task-navs.component.scss'
})
export class TaskNavsComponent {

  @Output() subNavChange = new EventEmitter<string>(); 
  activeNavItem: string = 'my-task';

  constructor(private router: Router) { }


  navigateToMyTask()
  {
    this.activeNavItem = 'my-task';
    this.subNavChange.emit('My Task'); 
    this.router.navigate(['task-tasks/tasks', 'my-task']);
  }

  navigateToTrackTask()
  {
    this.activeNavItem = 'track-task',
    this.subNavChange.emit('Track Task'); 
    this.router.navigate(['task-tasks/tasks', 'track-task'])
  }

  navigateToFormView()
  {
    this.activeNavItem = 'form-view',
    this.subNavChange.emit('Form View'); 
    this.router.navigate(['task-tasks/tasks', 'form-view']) 
  }

}
