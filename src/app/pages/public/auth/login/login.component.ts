import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import Swal from 'sweetalert2';
import {LoginService} from  '../../../../core/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = 'https://cdn-icons-png.flaticon.com/512/3649/3649204.png'
  constructor(
    private serviciologin:LoginService,
    private router: Router
    ) { }
  user="";
  password="";
  verificar() {
    if (this.user == "" || this.password == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect credentials!',
        toast: true,
        position: 'center',
        background: '#475c6a',
        color: '#dfe4e6'
      })
    }else{
      let credenciales=this.serviciologin.verificarlogin(this.user,this.password)
      if(credenciales[1]==true){
        if(credenciales[0]!="0"){
          this.router.navigate(['/pages/private/home/dashboard'])
        }
      }else if (credenciales[1]==false){
        if (credenciales[0]=="0"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect credentials!',
            toast: true,
            position: 'center',
            background: '#475c6a',
            color: '#dfe4e6'
          })
        }
      }
    }
  }
  ngOnInit(): void {
  }



}
