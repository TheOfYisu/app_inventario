import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  verificarlogin(user:string,pass:string){
    let retorno,verification,key
    if ((user=="jdgarizao") && (pass=="123456789")){
      verification=true,key="123456789"
      retorno=[
        key,
        verification
      ]
    }else{
      verification=false,key="0"
      retorno=[
        key,
        verification
      ]
    }
    return(retorno)
  }
}
