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
      {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
