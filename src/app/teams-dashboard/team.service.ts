import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Team } from '../Interface/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = 'https://api.example.com'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getTeamStrength(): Observable<number> {
    return this.http.get<{ strength: number }>(`${this.apiUrl}/team/strength`).pipe(
      map(response => response.strength),
      catchError(() => of(0)) 
    );
  }

  getWorkAnniversaries(): Observable<string[]> {
    return this.http.get<{ anniversaries: string[] }>(`${this.apiUrl}/team/anniversaries`).pipe(
      map(response => response.anniversaries.length > 0 ? response.anniversaries : ['No work anniversary celebrations today']),
      catchError(() => of(['No work anniversary celebrations today']))
    );
  }

  getNewHires(): Observable<string[]> {
    return this.http.get<{ hires: string[] }>(`${this.apiUrl}/team/new-hires`).pipe(
      map(response => response.hires.length > 0 ? response.hires : ['No new hires in the last 15 days']),
      catchError(() => of(['No new hires in the last 15 days']))
    );
  }

  getBirthdayBuddies(): Observable<string[]> {
    return this.http.get<{ buddies: string[] }>(`${this.apiUrl}/team/birthday-buddies`).pipe(
      map(response => response.buddies.length > 0 ? response.buddies : ['No birthday celebrations today']),
      catchError(() => of(['No birthday celebrations today']))
    );
  }

  getDepartmentFiles(): Observable<string[]> {
    return this.http.get<{ files: string[] }>(`${this.apiUrl}/team/department-files`).pipe(
      map(response => response.files.length > 0 ? response.files : ['No files found']),
      catchError(() => of(['No files found']))
    );
  }

  getTeamAvailability(): Observable<{ yetToCheckIn: number; onLeave: number }> {
    return this.http.get<{ availability: { yetToCheckIn: number; onLeave: number } }>(`${this.apiUrl}/team/availability`).pipe(
      map(response => response.availability),
      catchError(() => of({ yetToCheckIn: 0, onLeave: 0 }))
    );
  }

  postMessage(message: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/team/post-message`, { message }).pipe(
      catchError(() => {
        console.error('Message posting failed');
        return of();
      })
    );
  }
}
