import { Injectable } from '@angular/core';
import { Users_interface } from 'src/app/interfaces/users';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class Users_Service {

  private urlback='http://127.0.0.1:5000/'
  constructor(
    private http: HttpClient
  ) {
  }

  get getallusers():Observable<Users_interface[]>{
    return this.http.get<Users_interface[]>(`${this.urlback}/getusers`)
  }

  adduser(user:Users_interface):Observable<Users_interface>{
    const jsonadduser={
      'inid':user.id,
      'inname':user.name,
      'inlastname':user.lastname,
      'inemail':user.email,
      'inpassword':user.password
    }
    return this.http.post<Users_interface>(`${this.urlback}/adduser`,jsonadduser)
  }

  deleteuser(iduser:number):Observable<Users_interface>{
    return this.http.delete<Users_interface>(`${this.urlback}/deleteuser/${iduser}`)
  }
}
