import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss'
})
export class OrganizationComponent {
  @Output() subNavChange = new EventEmitter<string>();  // Specify string type
  activeNavItem: string = 'announcements';

  constructor(private router: Router) {}
  
  navigatePolicies(){
    this.activeNavItem = 'policies';
    this.subNavChange.emit('Policies'); 
    this.router.navigate(['/policies']);
  }
  
  navigateAnnouncements(){
    this.activeNavItem = 'announcements';
    this.subNavChange.emit('Announcements'); 
    this.router.navigate(['/announcements']);
  }
  
  navigateEmployeeTree(){
    this.activeNavItem = 'employeeTree';
    this.subNavChange.emit('Employee Tree'); 
    this.router.navigate(['/employeeTree']);
  }
  
  navigateDepartmentTree(){
    this.activeNavItem = 'departmentTree';
    this.subNavChange.emit('Department Tree'); 
    this.router.navigate(['/departmentTree']);
  }
  
  navigateDepartmentDirectory(){
    this.activeNavItem = 'departmentDirectory';
    this.subNavChange.emit('Department Directory'); 
    this.router.navigate(['/departmentDirectory']);
  }
  
  navigateBirthdayFolks(){
    this.activeNavItem = 'birthdayFolks';
    this.subNavChange.emit('Birthday Folks'); 
    this.router.navigate(['/birthdayFolks']);
  }
  
  navigateNewHires(){
    this.activeNavItem = 'newHires';
    this.subNavChange.emit('New Hires'); 
    this.router.navigate(['/newHires']);
  }

}
