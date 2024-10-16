import { Component } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.scss'
})
export class OperationComponent {

  searchTerm: string = '';  
  viewActive:boolean=true
  services = [
    { title: 'Leave Tracker', icon: 'bi-calendar-check', description: 'Manage leave requests, add holidays, and individual-specific leaves.' },
    { title: 'Files', icon: 'bi-folder', description: 'Specify file types, views, and access permissions.' },
    { title: 'Employee Information', icon: 'bi-person', description: 'Manage employee data, departments, designations.' },
    { title: 'Travel', icon: 'bi-airplane', description: 'Manage travel requests and approvals.' },
    { title: 'Tasks', icon: 'bi-list-task', description: 'View tasks by priority, add and manage task checklists.' },
    { title: 'HR Letters', icon: 'bi-envelope', description: 'View and manage official HR letter request records.' },
    { title: 'General', icon: 'bi-box', description: 'Manage, organize and track all HR-related generic cases.' },
    { title: 'Approvals', icon: 'bi-check-circle', description: 'View and manage approval requests classified by form.' },
    { title: 'Data Administration', icon: 'bi-database', description: 'Manage and monitor all data-related operations and usage.' }
  ];


  filteredServices() {
    if (!this.searchTerm) {
      return this.services;  // Return all services if no search term is entered
    }
    return this.services.filter(service =>
      service.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewClick(){
    this.viewActive=false;
  }
  
}
