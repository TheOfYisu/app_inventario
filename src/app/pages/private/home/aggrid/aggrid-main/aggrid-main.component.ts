import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CellClickedEvent, ColDef} from "ag-grid-community";

@Component({
  selector: 'app-aggrid-main',
  templateUrl: './aggrid-main.component.html',
  styleUrls: ['./aggrid-main.component.css']
})
export class AggridMainComponent implements OnInit {

  //Configurar columnas -->
  colDefs= [
    {field:'make'},
    {field:'model'},
    {field:'price'}
  ];

  //esta funcion hace que se pueda ordenar y filtrar, todo en una sola para no escibir varias lineas, se tiene que añadir en el html tambien.
  defaultColDef: ColDef = {
    sortable:true, filter:true
  }

  //Configurar filas -->
  /*
  //Datos fijos.
  rowData: [
    {make:'toyota',model:'celica',price:'35000'}
  ]
  */
  //Colocar los datos del servidor, es decir, datos dinamicos.
  rowData$!: Observable<any[]>;


  //Configurar eventos -->
  onCellClicked(event:CellClickedEvent){
    console.log(event)
  }

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
    //-Datos llamados de la base de datos o el servidor.
    this.rowData$ =this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }

}
