import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
    private apiUrl = 'http://localhost:3001/Teams';

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/Employee`).pipe(
        catchError(this.handleError<any[]>('getEmployees', []))
      );
    }

    getGoals(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/Goals`).pipe(
        catchError(this.handleError<any[]>('getGoals', []))
      );
    }

    getLeaves(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/Leave`).pipe(
        catchError(this.handleError<any[]>('getLeaves', []))
      );
    }

    addEmployee(employee: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/Employee`, employee).pipe(
        catchError(this.handleError<any>('addEmployee'))
      );
    }

    addGoal(goal: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/Goals`, goal).pipe(
        catchError(this.handleError<any>('addGoal'))
      );
    }

    addLeave(leave: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/Leave`, leave).pipe(
        catchError(this.handleError<any>('addLeave'))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
}
