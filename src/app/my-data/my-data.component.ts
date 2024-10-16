// my-data.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../AllServices/employee.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent {
  activeNavItem: string = 'leave-summary';
  @Output() subNavChange = new EventEmitter<string>();

  constructor(private router: Router, private myService: EmployeeService) {
    this.activeNavItem = this.myService.activeTab ? this.myService.activeTab : this.activeNavItem;
    this.router.navigate(['leave-tracking/mydata', this.activeNavItem]);
  }

  navigateToLeavesummary() {
    this.activeNavItem = 'leave-summary';
    this.router.navigate(['leave-tracking/mydata', 'leave-summary']);
    this.subNavChange.emit('leave-summary');
  }

  navigateToLeaveBalance() {
    this.activeNavItem = 'leave-balance';
    this.router.navigate(['leave-tracking/mydata', 'leave-balance']);
    this.subNavChange.emit('leave-balance');
  }

  navigateLeaveRequest() {
    this.activeNavItem = 'leave-requests';
    this.router.navigate(['leave-tracking/mydata', 'leave-requests']);
    this.subNavChange.emit('leave-requests');
  }

  navigateApplyLeave()
  {
    this.activeNavItem = 'apply-leave';
    this.router.navigate(['leave-tracking/mydata', 'apply-leave'])
  }
}
