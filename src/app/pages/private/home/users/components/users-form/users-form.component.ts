import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Users_Service} from 'src/app/core/services/users.service';
import { Users_interface} from 'src/app/interfaces/users';
import Swal from "sweetalert2";

@Component({
  selector: 'app-users-form',
  templateUrl: "./users-form.component.html",
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit{
  formuser:FormGroup
  isEdit=false

  constructor(
    private fb:FormBuilder,
    private Users_Service:Users_Service,
  ) {
    this.formuser=this.fb.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      checkpassword:['',Validators.required],
    })
  }

  save_users(){
    const adduser:Users_interface={
      id:Math.floor(Math.random() * 100),
      name:this.formuser.value.name,
      lastname:this.formuser.value.lastname,
      email:this.formuser.value.email,
      password:this.formuser.value.password,
      checkpassword:this.formuser.value.checkpassword
    }
    if (adduser.password==adduser.checkpassword){
      if(this.isEdit==false){
        Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          toast: true,
        }).then((result) => {
          if (result.isConfirmed) {
            this.Users_Service.adduser(adduser).subscribe()
            window.location.reload()
          }
        })
      }else{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, changed it!',
          toast: true,
        }).then((result) => {
          if (result.isConfirmed) {
            //this.Users_Service.updateuser(adduser)
            Swal.fire(
              'Susefull!',
              'Your file has been changed.',
              'success'
            )
          }
        })
      }
    }else{
      alert("Las contraseñas no son las mismas")
    }

  }

  ngOnInit():void {
  }
}


