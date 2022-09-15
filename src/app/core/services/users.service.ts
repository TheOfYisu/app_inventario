import { Injectable } from '@angular/core';
import { Users_interface } from 'src/app/interfaces/users';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Users_Service {

  private users=new BehaviorSubject<Users_interface[]>([])
  users$=this.users.asObservable()

  private editUser = new BehaviorSubject<Users_interface>( {} as Users_interface);
  editUser$ = this.editUser.asObservable();

  private getindex=0
  private iduser=0

  private urlback='http://127.0.0.1:5000/'
  constructor(
    private http: HttpClient
  ) {
    this.getallusers()
  }

  getallusers(){
    this.http.get<Users_interface[]>(`${this.urlback}/getusers`).subscribe(data=>{
      return this.users.next(data)
    })
  }

  adduser(user:Users_interface){
    this.users.next([...this.users.value,user])
    return this.http.post<Users_interface>(`${this.urlback}/adduser`,user).subscribe()
  }

  deleteuser(iduser:number,index:number){
    this.users.next(this.users.value.filter((user, i) => i !== index))
    return this.http.delete<Users_interface>(`${this.urlback}/deleteuser/${iduser}`)
  }

  getuser(index:number,iduse:number){
    this.editUser.next(this.users.value[index])
    this.getindex=index
    this.iduser=iduse
  }

  updateuser(user:Users_interface){
    this.users.value[this.getindex]=user
    this.users.next(this.users.value)
    return this.http.put<Users_interface>(`${this.urlback}/updateusrs/${this.iduser}`,user).subscribe()
  }


  clearUpdatedUser() {
    this.editUser.next({} as Users_interface);
  }
}
