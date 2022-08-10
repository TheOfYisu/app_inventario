import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {
  //column grid-users
  colDefs= [
    {
      headerName: "Id",
      field: "id",
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Email",
      field: "email",
    },
    {
      headerName: "Password",
      field: "password",
    }
  ];
  rowData= [
    {id:'01',name:'Jesus Garizao',email:'jesudgm.11@gmail.com',password:'123456789'}
  ]
  constructor() {
}

  ngOnInit(): void {
  }

}
