import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { UsersMainComponent } from './components/users-main/users-main.component';


@NgModule({
  declarations: [
    UsersFormComponent,
    UsersGridComponent,
    UsersMainComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
