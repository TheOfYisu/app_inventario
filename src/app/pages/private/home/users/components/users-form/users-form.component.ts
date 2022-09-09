import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { Usuarios } from 'src/app/interfaces/users';
import Swal from "sweetalert2";

//formulario para agregar
@Component({
  selector: 'app-users-form',
  templateUrl: "./users-form-add.component.html",
  styleUrls: ['./users-form.component.css']
})
export class UsersFormAddComponent{
  form:FormGroup
  constructor(
    private fb:FormBuilder,
    private _addusers:UsersService,
    private route:Router
  ) {
    this.form=this.fb.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      checkpassword:['',Validators.required],
    })
  }
  save_add_users(){
    const usuarioq:Usuarios={
      id: this.form.value.checkpassword, 
      name: this.form.value.name, 
      lastname: this.form.value.lastname, 
      email: this.form.value.email, 
      password: this.form.value.password
    }
    this._addusers.addusuarios(usuarioq)
    this.route.navigate(['/pages/private/home/users'])
  }

}
@Component({
  selector: 'app-users-form',
  templateUrl: "./users-form-edit.component.html",
  styleUrls: ['./users-form.component.css']
})
export class UsersFormEditComponent{

  constructor() { }

}

