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
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  formeditusers(){
    const dialogRef = this.dialog.open(UsersFormEditComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  formdeleteusers(){
    const dialogRef = this.dialog.open(UsersFormDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
