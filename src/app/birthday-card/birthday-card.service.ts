import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Interface/employee.model';


@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  private apiUrl = 'http://localhost:3001/employees';

  constructor(private http: HttpClient) { }

  getTodayBirthdays(): Observable<Employee[]> 
  {
    
    return this.http.get<Employee[]>(`${this.apiUrl}?birthday=today`);
  }
}