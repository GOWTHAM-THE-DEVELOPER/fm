import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveRequest } from '../Interface/leave-request.model'; // Import your leave request model
import { LeaveService } from '../AllServices/leave.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApplyLeaveComponent } from '../leave-summary/apply-leave/apply-leave.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestsComponent implements OnInit, AfterViewInit {

  leaveRequests: LeaveRequest[] = [];
  dataSource: MatTableDataSource<LeaveRequest> = new MatTableDataSource<LeaveRequest>();
  displayedColumns: string[] = ['select', 'employeeName', 'leaveType', 'type', 'leavePeriod', 'days', 'dateOfRequest', 'actions'];
  actions: string[] = ['Approve', 'Reject'];
  selectedRequests: LeaveRequest[] = [];
  leaveTypes: LeaveRequest[] = [
    { leaveType: 'Casual Leave' },
    { leaveType: 'Earned Leave' },
    { leaveType: 'Leave Without Pay' },
    { leaveType: 'Paternity Leave' },
    { leaveType: 'Sabbatical Leave' },
    { leaveType: 'Sick Leave' }
  ];

  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(
    private leaveService: LeaveService,
    private router: Router,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  ngAfterViewInit(): void {
    this.setTableProperties();
  }

  loadLeaveRequests(): void {
    debugger
    this.leaveService.getLeaves().subscribe({
      next: (data: LeaveRequest[]) => {
        this.leaveRequests = data;
        this.dataSource.data = this.leaveRequests;
        this.setTableProperties();
      },
      error: (error) => {
        console.error('Error fetching leave requests', error);
      }
    });
  }

  setTableProperties(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyLeave(): void {
    const dialogRef = this.dialog.open(ApplyLeaveComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newLeaveRequest: LeaveRequest = {
          employeeId: result.id,  
          employeeName: result.employeeName,
          leaveType: result.leaveType,
          type: result.type,
          leavePeriod: result.leavePeriod,
          daysTaken: result.days,
          dateOfRequest: result.dateOfRequest,
          selected: false
        };
        console.log(result)

        // Push the new leave request to the table
        this.leaveRequests.push(newLeaveRequest);

        // Optionally, send it to the server
        this.leaveService.addLeaveRequest(newLeaveRequest).subscribe();
      }
    });
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.dataSource.filter = input.value.trim().toLowerCase();
  }

  onRowSelect(event: Event, request: LeaveRequest): void {
    const inputElement = event.target as HTMLInputElement;  // Cast to HTMLInputElement
    if (inputElement.checked !== undefined) {
      request.selected = inputElement.checked;
      if (request.selected) {
        this.selectedRequests.push(request);
      } else {
        this.selectedRequests = this.selectedRequests.filter(r => r.employeeId !== request.employeeId);
      }
    }
  }


  // Select or deselect all requests
  selectAll(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const checked = inputElement.checked;
    this.selectedRequests = [];
    this.dataSource.data.forEach(request => {
      request.selected = checked;
      if (checked) {
        this.selectedRequests.push(request);
      }
    });
    this.dataSource._updateChangeSubscription();  // Trigger table update
  }

 
  deleteSelectedRequests(): void {
    if (this.selectedRequests.length === 0) {
      alert('Please select at least one request to delete.');
      return;
    }

    const confirmation = confirm('Are you sure you want to delete the selected leave request(s)?');

    if (confirmation) {
      this.selectedRequests.forEach(request => {
        this.leaveService.deleteLeaveRequest(request.employeeId).subscribe({
          next: () => {
            this.loadLeaveRequests();
          },
          error: (error) => {
            console.error('Error deleting leave request', error);
          }
        });
      });

      this.selectedRequests = []; 
    }
  }

  // Delete a single request directly
  onDelete(request: LeaveRequest): void {
    const confirmation = confirm('Are you sure you want to delete this leave request?');
    if (confirmation) {
      this.leaveService.deleteLeaveRequest(request?.employeeId).subscribe({
        next: () => {
          
          this.leaveRequests = this.leaveRequests.filter(
            (leave) => leave?.employeeId !== request?.employeeId
          );
          this.dataSource.data = this.leaveRequests;  
          console.log(`Leave request with employeeId ${request.employeeId} deleted`);
        },
        error: (error) => {
          console.error('Error deleting leave request', error);
        }
      });
    }
  }
  
  
 
// onDelete(request: LeaveRequest): void {
//   const confirmation = confirm('Are you sure you want to delete this leave request?');
//   if (confirmation) {
//       this.leaveRequests = this.leaveRequests.filter(req => req.employeeId !== request.employeeId);
//       console.log('Updated leaveRequests after deletion:', this.leaveRequests);

     
//       this.cd.detectChanges();
//   }
// }

  // Add the method to handle action selection
  onActionSelect(event: Event, request: LeaveRequest): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedAction = selectElement.value;

    // Handle different actions like Approve or Reject
    if (selectedAction === 'Approve') {
      this.approveLeaveRequest(request);
    } else if (selectedAction === 'Reject') {
      this.rejectLeaveRequest(request);
    }
  }

  // Method to approve the leave request
  approveLeaveRequest(request: LeaveRequest): void {
    // Logic to approve the request
    this.leaveService.approveLeaveRequest(request.employeeId).subscribe({
      next: () => {
        console.log(`Leave request ${request.employeeId} approved`);
        this.loadLeaveRequests();  // Reload the leave requests after approval
      },
      error: (error) => {
        console.error('Error approving leave request', error);
      }
    });
  }

  // Method to reject the leave request
  rejectLeaveRequest(request: LeaveRequest): void {
    // Logic to reject the request
    this.leaveService.rejectLeaveRequest(request.employeeId).subscribe({
      next: () => {
        console.log(`Leave request ${request.employeeId} rejected`);
        this.loadLeaveRequests();  // Reload the leave requests after rejection
      },
      error: (error) => {
        console.error('Error rejecting leave request', error);
      }
    });
  }

}
