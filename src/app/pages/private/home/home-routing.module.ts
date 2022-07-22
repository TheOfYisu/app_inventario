import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {path:'',
    component:HomeComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
      }
    ]
  },
  {path: 'dashboard', loadChildren: () => import('./container/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'inventario',loadChildren: ()=>import('./container/inventario/inventario.module').then(m=>m.InventarioModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
