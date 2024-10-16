import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
 api:any='http://localhost:3000/educationalFrom'

public userSubject = new BehaviorSubject<any>('Initial User');

 sendDetails = this.userSubject.asObservable();



  constructor(private apihttp:HttpClient) { }

  detailsValue(arrayValue: any){
    this.userSubject.next(arrayValue)
  }

  getMethod(){

    return this.apihttp.get(this.api);
  }

postMethod(data:any){
  const api='http://localhost:3000/educationalFrom'
  return this.apihttp.post(api,data);
}

professionPosttMethod(data:any){
  const api='http://localhost:3000/professionalForm'
  return this.apihttp.post(api,data);
}

basicPosttMethod(data:any){
  const api=' http://localhost:3000/basicFrom'
  return this.apihttp.post(api,data);
}


logingetMethod(){
  const val=" http://localhost:3000/loginFrom"

  return this.apihttp.get(val)
}


loginPostMethod(data:any){
  const val=" http://localhost:3000/loginFrom"
  return this.apihttp.post(val,data)
}

logingettingMethod(id:any){
  const val="http://localhost:3000/loginFrom"
  const url = `${val}/${id}`

  return this.apihttp.get(url)
}

loginPutMethod(data:any,id:any){
  const val="http://localhost:3000/loginFrom"
  const url = `${val}/${id}`

  return this.apihttp.put(url,data)
}

loginDeleteMethod(id:any){
  const val="http://localhost:3000/loginFrom"
  const url = `${val}/${id}`
  return this.apihttp.delete(url)
}

detailsDeleteMethod(id:any){
  const val="http://localhost:3000/educationalFrom"
  const url = `${val}/${id}`
  return this.apihttp.delete(url)
}



}
