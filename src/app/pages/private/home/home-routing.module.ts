import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'inventario',loadChildren:()=>import('./inventory/inventory.module').then(m=>m.InventoryModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
