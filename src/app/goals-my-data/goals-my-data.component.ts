import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals-my-data',
  templateUrl: './goals-my-data.component.html',
  styleUrl: './goals-my-data.component.scss'
})
export class GoalsMyDataComponent {
  @Output() subNavChange = new EventEmitter<string>();  // Specify string type
  activeNavItem: string = 'skillset';

  constructor(private router: Router) { }


  navigateToGoal()
  {
    this.activeNavItem = 'goals';
    this.subNavChange.emit('Goals');  // Emit string
    this.router.navigate(['perfomance-myData/myData', 'goals']);
  }

  navigateToSkillSet()
  {
    this.activeNavItem = 'skillset',
    this.subNavChange.emit('Skill Set');  // Emit string
    this.router.navigate(['perfomance-myData/myData', 'skillset'])
  }

  navigateToCompetency()
  {
    this.activeNavItem = 'competency',
    this.subNavChange.emit('Competency');  // Emit string
    this.router.navigate(['perfomance-myData/myData', 'competency'])
  }

  navigateToFeedback()
  {
    this.activeNavItem = 'feedback',
    this.subNavChange.emit('Feedback');  // Emit string
    this.router.navigate(['perfomance-myData/myData', 'feedback'])
  }

}
