import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryMainComponent } from './component/inventory-main/inventory-main.component';
import { InventoryFormComponent } from './component/inventory-form/inventory-form.component';


@NgModule({
  declarations: [
    InventoryMainComponent,
    InventoryFormComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
