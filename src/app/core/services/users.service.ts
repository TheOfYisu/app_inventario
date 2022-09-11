import { Injectable } from '@angular/core';
import { Users_interface } from 'src/app/interfaces/users';
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Users_Service {

  private users=new BehaviorSubject(<Users_interface[]>([]));
  users$=this.users.asObservable();

  private edituser=new BehaviorSubject(<Users_interface>({} as Users_interface));
  edituser$=this.edituser.asObservable();

  getindex=0

  listusers: Users_interface[] = [
    {id: '1', name: 'Jesus', lastname: 'Garizao', email: 'jdgarizao@gmail.com', password: '123456789'},
    {id: '2', name: 'Daniel', lastname: 'Mejia', email: 'jdmejia@itsa.edu.co', password: '987654321'},
    {id: '3', name: 'Maria', lastname: 'Jose', email: 'mjose@gmail.com', password: '654987321'},
    {id: '4', name: 'Daniela', lastname: 'Castro', email: 'mcastro@gmail.com', password: '155555'},
  ];
  constructor(
    private http: HttpClient
  ) {
    this.users.next(this.listusers)
  }

  get getusers(){
    return this.listusers
  }

  adduser(user:Users_interface){
    this.users.next([...this.users.value, user])
    console.log(this.listusers)
  }

  deleteuser(index:number){
    this.users.next(this.users.value.filter((user,i)=>i!==index))
    console.log(this.listusers)
  }

  getuser(index:number){
    this.edituser.next(this.users.value[index])
    this.getindex=index
  }

  updateuser(user:Users_interface){
    this.listusers[this.getindex]=user
    console.log(this.listusers)
    this.users.next(this.users.value)
  }

  clearUpdatedUser() {
    this.edituser.next({} as Users_interface);
  }
}
