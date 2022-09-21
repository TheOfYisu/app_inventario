import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryMainComponent } from './component/inventory-main/inventory-main.component';
import { InventoryFormComponent } from './component/inventory-form/inventory-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { InventoryViewDeviceComponent } from './component/inventory-view-device/inventory-view-device.component';
import { InventoryGridComponent } from './component/inventory-grid/inventory-grid.component';
import {AgGridModule} from "ag-grid-angular";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    InventoryMainComponent,
    InventoryFormComponent,
    InventoryViewDeviceComponent,
    InventoryGridComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    AgGridModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class InventoryModule { }
