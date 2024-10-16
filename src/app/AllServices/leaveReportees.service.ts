import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Interface/employee.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveReporteesService {

  private apiUrl = 'http://localhost:3001/LeaveReportees'; // Replace with actual API endpoint

  constructor(private http: HttpClient) { }

  getReportees(managerId: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}?managerId=${managerId}`);
  }
}
