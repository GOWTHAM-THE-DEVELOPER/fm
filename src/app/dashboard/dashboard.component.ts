import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../AllServices/leave.service';
import { Router } from '@angular/router';
import { LeaveRequest } from '../Interface/leave-request.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  leaves: LeaveRequest[] = [];

  constructor(private leaveService: LeaveService, private router: Router) {}

  ngOnInit() {
    this.leaveService.getLeaves().subscribe(data => {
      this.leaves = data;
    });
  }

  applyLeave() {
    this.router.navigate(['/apply-leave']);
  }
}
