import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-tree',
  templateUrl: './department-tree.component.html',
  styleUrls: ['./department-tree.component.scss']
})
export class DepartmentTreeComponent implements OnInit {
  employees!: any[];
  selectedDepartment: any = null;

  ngOnInit() {
    this.employees = [
      {
        children: [
          { 
            label: 'Management',
            children: [
              { label: 'John Doe' },
              { label: 'Jane Smith' }
            ]
          },
          {
            label: 'Marketing',
            children: [
              { label: 'Emily Johnson' },
              { label: 'Michael Brown' }
            ]
          },
          {
            label: 'IT',
            children: [
              { label: 'Daniel Wilson' },
              { label: 'Sophia Davis' }
            ]
          },
          {
            label: 'HR',
            children: [
              { label: 'William Garcia' },
              { label: 'Isabella Martinez' }
            ]
          }
        ]
      }
    ];
  }

  selectDepartment(department: any) {
    this.selectedDepartment = department;
  }
}
