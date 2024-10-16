import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Interface/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3001/Employee'; 

  activeTab: string = '';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getRecentHires(): Observable<Employee[]> 
  {
    return this.http.get<Employee[]>(`${this.apiUrl}?recent=true`);
  }

  getEmployeeById(id: string): Observable<Employee> 
  {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
  getEmployeesOnLeave(date: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees?date=${date}`);
  }

  updateEmployee(employee: Employee): Observable<Employee> 
  {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.employeeId}`, employee);
  }

  deleteEmployee(id: number): Observable<void> 
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
