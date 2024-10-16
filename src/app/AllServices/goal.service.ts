import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Goal, Comment } from '../Interface/Goals.model';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private apiUrl = 'http://localhost:3001/Goals';
  private commentUrl = 'http://localhost:3001/comments';
  private goalsUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.apiUrl);
  }

  getGoalById(id: number): Observable<Goal> {
    return this.http.get<Goal>(`${this.apiUrl}/${id}`);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.getGoals().pipe(
      map(goals => {
        // Generate a numerical ID based on the highest existing ID
        const newId = goals.length > 0 ? (Math.max(...goals.map(g => +g.id)) + 1).toString() : '1';
        const newGoal = { ...goal, id: newId }; // Ensure the ID is a string
        return newGoal;
      }),
      switchMap(newGoal => this.http.post<Goal>(this.apiUrl, newGoal)),
      map((addedGoal: Goal) => {
        this.goalsUpdated.next(); // Notify about the new goal
        return addedGoal;
      }),
      catchError(this.handleError<Goal>('addGoal'))
    );
  }
  
  

  updateGoal(id: number, goal: Goal): Observable<Goal> {
    return this.http.put<Goal>(`${this.apiUrl}/${id}`, goal).pipe(
      map((updatedGoal: Goal) => {
        this.goalsUpdated.next(); // Notify about the update
        return updatedGoal;
      }),
      catchError(this.handleError<Goal>('updateGoal'))
    );
  }

  // GoalService
deleteGoal(id: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
    map(() => {
      this.goalsUpdated.next(); // Notify about the deletion
    }),
    catchError(this.handleError<void>('deleteGoal'))
  );
}


  getGoalsUpdatedListener(): Observable<void> {
    return this.goalsUpdated.asObservable();
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.commentUrl}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.commentUrl}`, comment).pipe(
      catchError(this.handleError<Comment>('addComment'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => error);
    };
  }
}
