import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggridRoutingModule } from './aggrid-routing.module';
import { AggridMainComponent } from './aggrid-main/aggrid-main.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AggridMainComponent
  ],
  imports: [
    CommonModule,
    AggridRoutingModule,
    AgGridModule,
    HttpClientModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class AggridModule { }
