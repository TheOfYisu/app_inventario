import {Component, OnInit} from '@angular/core';
import {inventory_interface} from "../../../../../../interfaces/inventory";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventory-main',
  templateUrl: './inventory-main.component.html',
  styleUrls: ['./inventory-main.component.css']
})


export class InventoryMainComponent implements OnInit {

  list_inventari: inventory_interface[] = [
    {id: 1, brand: 'dell', model: 'vostro 14', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
    //{id: 2, brand: 'dell', model: 'vostro 15', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
    //{id: 1, brand: 'dell', model: 'vostro 14', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
    //{id: 2, brand: 'dell', model: 'vostro 15', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
  ]
  invent_columns: string[] = ['id', 'brand', 'model', 'seriel', 'commercial_value', 'invoice_number']
  dataSource = new MatTableDataSource(this.list_inventari);

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  mostrar(row) {
    console.log(row['id'])
    const id=row['id']
    this.router.navigate(['view/device/${this.id}'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
