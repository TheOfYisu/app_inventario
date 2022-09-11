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
  formadduser:FormGroup
  isEdit=false

  constructor(
    private fb:FormBuilder,
    private Users_Service:Users_Service,
  ) {
    this.formadduser=this.fb.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      checkpassword:['',Validators.required],
    })
  }

  save_users(){
    const adduser:Users_interface={
      id:this.formadduser.value.checkpassword,
      name:this.formadduser.value.name,
      lastname:this.formadduser.value.lastname,
      email:this.formadduser.value.email,
      password:this.formadduser.value.password
    }
    if(this.isEdit==false){
      //this.Users_Service.adduser(adduser)
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
  }

  ngOnInit():void {
    /*
    this.Users_Service.edituser$.subscribe((data)=>{
      this.isEdit=!!data?.id;
      this.formadduser.patchValue(data)
    })

     */
  }

}


