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
  logo = 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/184973564_109645341293504_6021323643057604317_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tFyPLNOqpGAAX8zOBpT&_nc_ht=scontent-bog1-1.xx&oh=00_AT9WWg4rGMVPF6IXpAx59PDGE5hZy7x8FdR4X7H87k6xxA&oe=6308C009'
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
