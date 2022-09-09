import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/core/services/users.service';
import { Usuarios } from 'src/app/interfaces/users';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {

  listusuarios: Usuarios[] = []

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'password', 'acciones'];
  dataSource !: MatTableDataSource<any>;


  constructor(private _userservice: UsersService) {
  }

  ngOnInit(): void {
    this.cargarusers()
  }
  cargarusers() {
    this.listusuarios = this._userservice.getusuarios()
    this.dataSource = new MatTableDataSource(this.listusuarios)
  }

  usersdelete(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      toast: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._userservice.deleteusuarios(index)
        this.cargarusers()
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
