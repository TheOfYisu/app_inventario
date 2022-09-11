import { Injectable } from '@angular/core';
import { Users_interface } from 'src/app/interfaces/users';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Users_Service {

  private urlapi='http://127.0.0.1:5000/getusers'
  constructor(
    private http: HttpClient
  ) {

  }

  getallusers():Observable<Users_interface[]>{
    return this.http.get<Users_interface[]>(this.urlapi)
  }

  deletuser(id:number){

  }

}
