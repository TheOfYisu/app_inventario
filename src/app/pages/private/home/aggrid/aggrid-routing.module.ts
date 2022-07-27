import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AggridMainComponent} from "./aggrid-main/aggrid-main.component";

const routes: Routes = [
  {path:'',component:AggridMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AggridRoutingModule { }
