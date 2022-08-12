import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {get, getProperty} from "ag-grid-community/dist/lib/utils/object";
import Swal from "sweetalert2";
import getInput = module

//formulario para agregar
@Component({
  selector: 'app-users-form',
  templateUrl: "./users-form-add.component.html",
  styleUrls: ['./users-form.component.css']
})
export class UsersFormAddComponent{
  form:FormGroup;
  constructor(
    private fb:FormBuilder,
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
    console.log(JSON.stringify(this.form.value))
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

@Component({
  selector: 'app-users-form',
  templateUrl: "./users-form-delate.component.html",
  styleUrls: ['./users-form.component.css']
})
export class UsersFormDeleteComponent {

  ngOnInit(): void {
  }

}

