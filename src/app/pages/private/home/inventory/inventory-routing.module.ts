import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InventoryMainComponent} from "./component/inventory-main/inventory-main.component";
import {InventoryFormComponent} from "./component/inventory-form/inventory-form.component";
import {InventoryViewDeviceComponent} from "./component/inventory-view-device/inventory-view-device.component";

const routes: Routes = [
  {path:'',component:InventoryMainComponent},
  {path:'form',component:InventoryFormComponent},
  {path:'view/device',component:InventoryViewDeviceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
