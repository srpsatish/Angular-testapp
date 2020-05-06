import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
  d:Date;
  url="http://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  ShowDate(){
    this.d=new Date();
    return this.d;
  }
  getUsers(){
    return this.http.get(this.url)
  }
}
