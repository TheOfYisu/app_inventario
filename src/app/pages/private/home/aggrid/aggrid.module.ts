import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggridRoutingModule } from './aggrid-routing.module';
import { AggridMainComponent } from './aggrid-main/aggrid-main.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AggridMainComponent
  ],
  imports: [
    CommonModule,
    AggridRoutingModule,
    AgGridModule,
    HttpClientModule
  ]
})
export class AggridModule { }
