import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  UsersFormAddComponent, UsersFormDeleteComponent,
  UsersFormEditComponent
} from "../users-form/users-form.component";

@Component({
  selector: 'app-users-buttonmenu',
  templateUrl: './users-buttonmenu.component.html',
  styleUrls: ['./users-buttonmenu.component.css']
})
export class UsersButtonmenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {

  }

  formaddusers(){
    const dialogRef = this.dialog.open(UsersFormAddComponent);
    modalClass: 'modal-xl'
    dialogRef.afterClosed();
  }
  formeditusers(){
    const dialogRef = this.dialog.open(UsersFormEditComponent);
    dialogRef.afterClosed();
  }
  formdeleteusers(){
    const dialogRef = this.dialog.open(UsersFormDeleteComponent);
    dialogRef.afterClosed();
  }

  ngOnInit(): void {
  }

}
