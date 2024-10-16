import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-performance-my-data',
  templateUrl: './performance-my-data.component.html',
  styleUrl: './performance-my-data.component.scss'
})
export class PerformanceMyDataComponent {

  activeNavItem: string = 'myData';
  activeSubNavItem: string = 'Skill Set'
  

  constructor(private router : Router) {}

  navigateToMyData()
  {
    this.activeNavItem = 'myData';
    this.activeSubNavItem = 'Skill set'; 
    this.router.navigate(['/myData']);
  }

  navigateToMySkillSetMatrix()
  {
    this.activeNavItem = 'mySkillSetMatrix';
    this.activeSubNavItem = ''; 
    this.router.navigate(['myData']);
  }

  updateBreadcrumb(subNav: any) {
    this.activeSubNavItem = subNav;
  }  
}
