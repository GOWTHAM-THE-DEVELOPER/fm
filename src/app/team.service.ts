import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



export interface Section {
  id: number;
  name: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:3000/sections';  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // getSections(): Observable<Section[]> {
  //   return this.http.get<Section[]>(this.apiUrl).pipe(
  //     catchError(this.handleError<Section[]>('getSections', []))
  //   );
  // }

  getSections(){
    return this.http.get(this.apiUrl)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
