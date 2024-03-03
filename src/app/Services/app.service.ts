import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  //add Student
  addStudent(data:any):Observable<any>{
   return  this.http.post('https://student-reg-angular-server.onrender.com',data)
  }

  //get student
  getAllStudent():Observable<any>{
    return this.http.get('https://student-reg-angular-server.onrender.com');
  }

  deleteStudent(id:any):Observable<any>{
    return this.http.delete(`https://student-reg-angular-server.onrender.com/${id}`)
  }

  updateStudent(id:any,data:any):Observable<any>{
    return this.http.put(`https://student-reg-angular-server.onrender.com/${id}`,data)
  }


}
