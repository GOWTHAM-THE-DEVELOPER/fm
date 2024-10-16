// department-directory.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-department-directory',
  templateUrl: './department-directory.component.html',
  styleUrls: ['./department-directory.component.scss']
})
export class DepartmentDirectoryComponent {
  departments = [
    { label: 'HR' },
    { label: 'IT' },
    { label: 'Management' },
    { label: 'Marketing' }
  ];

  selectedDepartment: any;

  selectDepartment(department: any): void {
    this.selectedDepartment = department;
  }
}