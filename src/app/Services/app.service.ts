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
   return  this.http.post('http://localhost:3000/students',data)
  }

  //get student
  getAllStudent():Observable<any>{
    return this.http.get('http://localhost:3000/students');
  }

  deleteStudent(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }

  updateStudent(id:any,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/students/${id}`,data)
  }


}
