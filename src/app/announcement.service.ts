import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from './announcement.model'; // Adjust import as necessary

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiUrl = 'http://localhost:3000/announcements'; // Adjust this URL to your setup

  constructor(private http: HttpClient) { }

  // Method to save a new announcement
  saveAnnouncement(announcement: Announcement): Observable<Announcement> {
    return this.http.post<Announcement>(this.apiUrl, announcement);
  }

  // Method to get all announcements (if needed)
  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.apiUrl);
  }

  // Method to get a specific announcement by ID
  getAnnouncementById(id: number): Observable<Announcement> {
    return this.http.get<Announcement>(`${this.apiUrl}/${id}`);
  }

  // Method to update an existing announcement
  updateAnnouncement(id: number, announcement: Announcement): Observable<Announcement> {
    return this.http.put<Announcement>(`${this.apiUrl}/${id}`, announcement);
  }

  // Method to delete an announcement
  deleteAnnouncement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
