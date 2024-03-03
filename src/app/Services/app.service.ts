import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  SERVER_URL="https://student-reg-angular-server.onrender.com"
  constructor(private http:HttpClient) { }

  //add Student
  addStudent(data:any):Observable<any>{
   return  this.http.post(`${this.SERVER_URL}`,data)
  }

  //get student
  getAllStudent():Observable<any>{
    return this.http.get(`${this.SERVER_URL}`);
  }

  deleteStudent(id:any):Observable<any>{
    return this.http.delete(`${this.SERVER_URL}/${id}`)
  }

  updateStudent(id:any,data:any):Observable<any>{
    return this.http.put(`${this.SERVER_URL}/${id}`,data)
  }


}
