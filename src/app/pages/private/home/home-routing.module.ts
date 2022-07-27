import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'inventory',loadChildren:()=>import('./inventory/inventory.module').then(m=>m.InventoryModule)},
      {path:'users',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
      {path:'client',loadChildren:()=>import('./client/client.module').then(m=>m.ClientModule)},
      {path:'aggrid',loadChildren:()=>import('./aggrid/aggrid.module').then(m=>m.AggridModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
