import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LeaveRequest } from '../Interface/leave-request.model';
import { LeaveService } from '../AllServices/leave.service';

@Component({
  selector: 'app-approval-leave-request',
  templateUrl: './approval-leave-request.component.html',
  styleUrls: ['./approval-leave-request.component.scss']
})
export class ApprovalLeaveRequestComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  dataSource: MatTableDataSource<LeaveRequest> = new MatTableDataSource();

  displayedColumns: string[] = [
    'employeeId', 'employeeName', 'email', 'designation', 'leaveType', 'teamId',
    'startDate', 'endDate', 'totalLeaveDays', 'reason', 'status', 'actions'
  ];
  status!: 'pending' | 'approved' | 'rejected';

  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private leaveService: LeaveService) {}

  ngOnInit() {
    this.loadLeaveRequests();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadLeaveRequests(): void {
    this.leaveService.getLeaves().subscribe(
      (data: LeaveRequest[]) => {
        this.leaveRequests = data;
        this.dataSource.data = this.leaveRequests;
      },
      (error) => {
        console.error('Error fetching leave requests', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.dataSource.filter = input.value.trim().toLowerCase();
  }

  approveRequest(request: LeaveRequest): void {
    request.status='approved';
    debugger
    if (confirm('Are you sure you want to approve this leave request?')) {
      this.leaveService.updateLeaveRequest(request.employeeId, { status: 'Approved' }).subscribe(() => {
        this.refreshData();
      });
      console.log(request.employeeId)
    }
  }

  rejectRequest(request: LeaveRequest): void {
    request.status='rejected';
    const comment = prompt('Please enter the reason for rejection:');
    if (comment) {
      this.leaveService.updateLeaveRequest(request.employeeId, { status: 'Rejected', comment }).subscribe(() => {
        this.refreshData();
      });
    }
  }

  refreshData(): void {
    this.leaveService.getLeaves().subscribe(
      (data: LeaveRequest[]) => {
        this.leaveRequests = data;
        this.dataSource.data = this.leaveRequests;
      },
      (error) => {
        console.error('Error refreshing leave requests', error);
      }
    );
  }
}
