import { Component, OnInit } from '@angular/core';
import {GridApi, SelectionChangedEvent} from "ag-grid-community";
import {Router} from '@angular/router';
import {query} from "@angular/animations";

@Component({
  selector: 'app-inventory-grid',
  templateUrl: './inventory-grid.component.html',
  styleUrls: ['./inventory-grid.component.css']
})
export class InventoryGridComponent implements OnInit {

  colDefs= [
    {field: "id"},
    {field: "brand"},
    {field: "model"},
    {field: "seriel"},
    {field: "commercial_value"},
    {field: "invoice_number"},
  ];

  rowData= [
    {id: 1, brand: 'dell', model: 'vostro 14', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
    {id: 2, brand: 'dell', model: 'vostro 15', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
    {id: 1, brand: 'dell', model: 'vostro 14', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
    {id: 2, brand: 'dell', model: 'vostro 15', seriel: 'x1265x14', commercial_value: 2000000, invoice_number: 'adb1535'},
  ]

  mostrar(row) {
    const id=row.id
    this.router.navigate(['/pages/private/home/inventory/view/device'],{queryParams:{id}})
  }

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
