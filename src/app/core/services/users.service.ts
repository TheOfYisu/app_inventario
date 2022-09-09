import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  list_usuarios: Usuarios[] = [
    {id: '1', name: 'Jesus', lastname: 'Garizao', email: 'jdgarizao@gmail.com', password: '123456789'},
    {id: '1', name: 'Jesus', lastname: 'Garizao', email: 'jdgarizao@gmail.com', password: '123456789'},
    {id: '1', name: 'Jesus', lastname: 'Garizao', email: 'jdgarizao@gmail.com', password: '123456789'},
    {id: '1', name: 'Jesus', lastname: 'Garizao', email: 'jdgarizao@gmail.com', password: '155555'},
  ];
  constructor() { }
  getusuarios(){
    return this.list_usuarios.slice()
  }

  deleteusuarios(index:number){
    this.list_usuarios.splice(index,1)
  }

  addusuarios(user:Usuarios){  
    this.list_usuarios.push(user)
  }
}
