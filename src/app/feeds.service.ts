import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { an } from '@fullcalendar/core/internal-common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  private url='http://localhost:3000/feeds'
  constructor(private api:HttpClient) { }

  getMethod(){
    return this.api.get(this.url);
  }

  postMethod(data: any){
    return this.api.post('http://localhost:3000/feeds',data);
  }

  deleteMethod(id: any){
    return this.api.delete(`${this.url}/${id}`);
  }

  gettingMethod(id:any){
    return this.api.get(`${this.url}/${id}`);
  }

  putMethod(id:any, data:any) {
    return this.api.put(this.url+'/'+id,data);
  }
}
