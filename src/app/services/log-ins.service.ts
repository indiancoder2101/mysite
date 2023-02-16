import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LogInsService  {

  constructor( private http:HttpClient) { }
  userLogin(data: any){
    return this.http.post('http://localhost:3000/Login', data);
  }
}
