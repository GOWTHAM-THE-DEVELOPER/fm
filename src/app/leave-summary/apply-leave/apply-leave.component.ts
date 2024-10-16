import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeAuthService } from 'src/app/AllServices/EmployeeAuthService';
import { LeaveService } from 'src/app/AllServices/leave.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

  leaveTypes = ['Casual Leave', 'Earned Leave', 'Leave Without Pay', 'Paternity Leave', 'Sabbatical Leave', 'Sick Leave'];
  leaveForm!: FormGroup;
  startDateError: string | null = null;
  endDateError: string | null = null;

  constructor(
    private leaveService: LeaveService,
    private authService: EmployeeAuthService, 
    public dialogRef: MatDialogRef<ApplyLeaveComponent> 
  ) { }

  ngOnInit(): void {
    this.leaveForm = new FormGroup({
      leaveType: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      teamEmail: new FormControl('', [Validators.required, Validators.email]),
      reason: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const leaveData = this.leaveForm.value;
      console.log(leaveData,"leave data")

      // Submit the leave data to the service
      this.leaveService.applyLeave(leaveData).subscribe(() => {
        console.log('Leave applied successfully');

        // Calculate the number of days for the leave
        const employee = this.authService.getAuthenticatedEmployee();
        const startDate = new Date(leaveData.startDate);
        const endDate = new Date(leaveData.endDate);
        const diffInMs = endDate.getTime() - startDate.getTime();
        const days = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) + 1;


        let leaveType;
      switch (leaveData.leaveType) {
        case 'Casual Leave':
        case 'Earned Leave':
          leaveType = 'Paid';
          break;
        case 'Leave Without Pay':
          leaveType = 'Unpaid';
          break;
        default:
          leaveType = 'Paid';
      }

        // Close the dialog and pass the leave data back
        this.dialogRef.close({
          leaveType: leaveData.leaveType,
          days: days // Number of days for the applied leave
        });
        
        this.dialogRef.close({
          employeeName: employee.employeeName, // Employee name
          leaveType: leaveData.leaveType,
          type: leaveType, // Paid or Unpaid
          leavePeriod: `${startDate.toDateString()} - ${endDate.toDateString()}`,
          days: days,
          dateOfRequest: new Date().toDateString()
        });
      });
    }
  }

  cancel(): void {
    this.dialogRef.close(); 
  }
}