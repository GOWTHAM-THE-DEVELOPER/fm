import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from '../AllServices/leave.service';
import { LeaveRequest } from '../Interface/leave-request.model';
import { ApplyLeaveComponent } from '../leave-summary/apply-leave/apply-leave.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.scss']
})
export class LeaveBalanceComponent implements OnInit {
  leaves: LeaveRequest[] = [];
  isLoading: boolean = true; // Optional, to show a loading indicator

  constructor(
    private router: Router,
    private leaveService: LeaveService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadLeaves();
  }

  loadLeaves(): void {
    this.leaveService.getLeaves().subscribe({
      next: (data: LeaveRequest[]) => {
        this.leaves = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching leave data', error);
        this.isLoading = false;
      }
    });

    this.leaveService.getLeaveApplied().subscribe((appliedLeave: any) => {
      if (appliedLeave) {
        this.updateLeaveCounts(appliedLeave);
      }
    });
  }

  updateLeaveCounts(leaveData: any): void {
    const leaveIndex = this.leaves.findIndex((leave) => leave.type === leaveData.leaveType);
    if (leaveIndex !== -1) {
      this.leaves[leaveIndex].available -= leaveData.days;
      this.leaves[leaveIndex].booked += leaveData.days;
    }
  }

  applyLeave() {
    const dialogRef: MatDialogRef<ApplyLeaveComponent, any> = this.dialog.open(ApplyLeaveComponent, {
      // width: '400px',
      data: {} // You can pass data if needed
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