import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Users_Service } from 'src/app/core/services/users.service';
import { Users_interface } from 'src/app/interfaces/users';
import Swal from 'sweetalert2';
import {UsersFormComponent} from "../users-form/users-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {

  listusers: Users_interface[] = []

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'password', 'acciones'];
  dataSource !: MatTableDataSource<any>;

  constructor(
    private Users_Service: Users_Service,
    public dialog: MatDialog
  ){
  }

  ngOnInit(): void {
    this.cargarusers()
  }
  cargarusers() {
    this.Users_Service.users$.subscribe((data) => {
      this.listusers = data;
      this.dataSource = new MatTableDataSource(data);
    })
  }


  deleteusers(index: number) {
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
        this.Users_Service.deleteuser(this.listusers[index].id,index).subscribe()
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        }).then((result) => {
          if (result.isConfirmed) {
            //window.location.reload()
          }
        })
      }
    })
  }

  getedituser(index: number){
    const iduser=this.listusers[index].id
    const dialogRef = this.dialog.open(UsersFormComponent);
    modalClass: 'modal-xl'
    dialogRef.afterClosed();
    this.Users_Service.getuser(index,iduser)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
