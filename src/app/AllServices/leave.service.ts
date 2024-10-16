import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { LeaveRequest } from '../Interface/leave-request.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private apiUrl = 'http://localhost:3001/Leave';
  private leaveurl = 'http://localhost:3001/LeaveSummary';
  private leaveAppliedSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getEmployeeDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employee-details`);
  }

  getLeaveData(year: number): Observable<any> {
    return this.http.get<any>(`/assets/data/leave-data-${year}.json`);
  }

  updateLeaveRequest(index: number, leaveRequest: Partial<LeaveRequest>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${index}`, leaveRequest);
  }

  getUpcomingLeaves(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/upcoming`);
  }

  bookLeave(leaveType: string, days: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { leaveType, days });
  }

  cancelLeave(leaveType: string, days: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { leaveType, days, cancel: true });
  }

  applyLeave(leaveData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, leaveData);
  }

  setLeaveApplied(leaveData: LeaveRequest): void {
    this.leaveAppliedSubject.next(leaveData); // Emit updated leave data
  }

  getLeaveApplied(): Observable<any> {
    return this.leaveAppliedSubject.asObservable();
  }

  approveLeaveRequest(employeeId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/approve/${employeeId}`, {});
  }

  // Reject leave request (assuming an API endpoint for rejection exists)
  rejectLeaveRequest(employeeId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/reject/${employeeId}`, {});
  }

  
  deleteLeaveRequest(employeeId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${employeeId}`);
  }

  // Fetch all leave requests
  getLeaves(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.apiUrl);
  }
  getLeaveSummary(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.leaveurl);
  }

  addLeaveRequest(request: LeaveRequest): Observable<LeaveRequest> {
    return this.http.post<LeaveRequest>(`${this.apiUrl}`, request);
  }
  
}
