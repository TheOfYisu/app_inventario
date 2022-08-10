import { Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
      id:['',Validators.required],
      name:['',Validators.required],
      code:['',Validators.required]
    })
  }
  save_add_users(){
    console.log(this.form.value)
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

