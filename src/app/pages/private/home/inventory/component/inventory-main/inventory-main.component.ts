import {Component, OnInit} from '@angular/core';
import {inventory_interface} from "../../../../../../interfaces/inventory";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory-main',
  templateUrl: './inventory-main.component.html',
  styleUrls: ['./inventory-main.component.css']
})


export class InventoryMainComponent implements OnInit {

  fuctionadd(){
    this.router.navigate(['/pages/private/home/inventory/form'])
  }

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
}
