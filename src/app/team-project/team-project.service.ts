import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamProjectService {
 
  api='http://localhost:3000/project'
  constructor(private apihttp:HttpClient) { }
  
  getMethod(){
      return this.apihttp.get('http://localhost:3000/project')
    }

  
  
  postMethod(item:any){
    return this.apihttp.post('http://localhost:3000/project',item)
  }

  
  deleteMethod(id:any){
    return this.apihttp.delete('http://localhost:3000/project'+'/'+id)
  }


    editMethod(id:any){
      return this.apihttp.get('http://localhost:3000/project'+'/'+id);
      }
    updateMethod(id:any,data:any){
         return this.apihttp.put('http://localhost:3000/project'+'/'+id,data);
       }
  }
