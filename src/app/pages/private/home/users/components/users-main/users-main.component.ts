import { Component, OnInit } from '@angular/core';
import { UsersFormAddComponent } from '../users-form/users-form.component';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  formaddusers(){
    const dialogRef = this.dialog.open(UsersFormAddComponent);
    modalClass: 'modal-xl'
    dialogRef.afterClosed();
  }

}
