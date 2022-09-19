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


@NgModule({
  declarations: [
    InventoryMainComponent,
    InventoryFormComponent,
    InventoryViewDeviceComponent
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
  ]
})
export class InventoryModule { }
