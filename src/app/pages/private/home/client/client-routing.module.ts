import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersMainComponent} from "../users/components/users-main/users-main.component";
import {ClientMainComponent} from "./components/client-main/client-main.component";

const routes: Routes = [{
  path: '',
  component: ClientMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
