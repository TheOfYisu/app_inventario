import { Component, OnInit } from '@angular/core';
import { UsersFormComponent } from '../users-form/users-form.component';
import {MatDialog} from "@angular/material/dialog";
import {Users_Service} from "../../../../../../core/services/users.service";

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private Users_service:Users_Service
  ) { }

  ngOnInit(): void {
  }
  formaddusers(){
    //this.Users_service.clearUpdatedUser()
    const dialogRef = this.dialog.open(UsersFormComponent);
    modalClass: 'modal-xl'
    dialogRef.afterClosed();
  }

}
