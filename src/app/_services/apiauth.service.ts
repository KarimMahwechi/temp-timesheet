import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import any = jasmine.any;

@Injectable({
  providedIn: 'root'
})
export class ApiauthService {

  constructor(private http:HttpClient) {


  }


  register(data:any){
    return this.http.post("http://localhost/1000/api/users",data)
  }

  login(data:any){
    return this.http.post("http://localhost/1000/api/users/login",data)
  }

}
