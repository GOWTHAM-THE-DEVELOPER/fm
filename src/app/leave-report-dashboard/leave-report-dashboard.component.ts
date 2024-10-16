import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../AllServices/leave.service';
import { LeaveRequest } from '../Interface/leave-request.model';
import { ApplyLeaveComponent } from '../leave-summary/apply-leave/apply-leave.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-report-dashboard',
  templateUrl: './leave-report-dashboard.component.html',
  styleUrls: ['./leave-report-dashboard.component.scss']
})
export class LeaveReportDashboardComponent implements OnInit {
  leaves: LeaveRequest[] = [];
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private leaveService: LeaveService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadLeaveReports();
  }

  loadLeaveReports(): void {
    this.leaveService.getLeaves().subscribe(
      (data: LeaveRequest[]) => {
        this.leaves = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching leave data', error);
        this.isLoading = false;
      }
    );
  }

  applyLeave() {
    const dialogRef = this.dialog.open(ApplyLeaveComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.leaveService.bookLeave(result.leaveType, result.days).subscribe({
          next: (response) => {
            this.leaveService.setLeaveApplied(result);
          },
          error: (error) => {
            console.error('Error applying leave', error);
          }
        });
      }
    });
  }
}
