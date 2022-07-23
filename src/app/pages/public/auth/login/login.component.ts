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
  logo = 'https://img.icons8.com/external-xnimrodx-blue-xnimrodx/344/external-login-seo-xnimrodx-blue-xnimrodx.png'
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
        text: 'The fields are empty!',
      })
    }else{
      let credenciales=this.serviciologin.verificarlogin(this.user,this.password)
      if(credenciales[1]==true){
        if(credenciales[0]!="0"){
          this.router.navigate(['/pages/private/home'])
        }
      }else if (credenciales[1]==false){
        if (credenciales[0]=="0"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect credentials!',
          })
        }
      }
    }
  }
  ngOnInit(): void {
  }



}
