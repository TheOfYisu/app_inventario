import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CellClickedEvent, ColDef} from "ag-grid-community";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aggrid-main',
  templateUrl: './aggrid-main.component.html',
  styleUrls: ['./aggrid-main.component.css']
})
export class AggridMainComponent implements OnInit {

  //Configurar columnas -->
  colDefs= [
    {
      headerName: "Id",
      field: "id",
    },
    {
      headerName: "Code",
      field: "code",
    },
    {
      headerName: "Name",
      field: "name",
    }
  ];

  
  //Configurar filas -->
  //Datos fijos.
  rowData= [
    {id:'toyota',code:'celica',name:'35000'}
  ]
  /*
  //esta funcion hace que se pueda ordenar y filtrar, todo en una sola para no escibir varias lineas, se tiene que añadir en el html tambien.
  defaultColDef: ColDef = {
    sortable:true, filter:true
  }
  */
  /*
  //Colocar los datos del servidor, es decir, datos dinamicos.
  rowData$!: Observable<any[]>;
  
  
  //Configurar eventos -->
  onCellClicked(event:CellClickedEvent){
    console.log(event)
  }
  */

  //validador de form
  id=new FormControl('',Validators.required)
  name=new FormControl('',Validators.required)
  code=new FormControl('',Validators.required)

  newForm =new FormGroup({
    id:this.id,
    code:this.code,
    name:this.name
  })

  onSubmit(){}

  constructor( private http:HttpClient ) { }
  ngOnInit(): void {
    //-Datos llamados de la base de datos o el servidor.
    //this.rowData$ =this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }

}
