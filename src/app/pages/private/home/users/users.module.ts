import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {
  UsersFormAddComponent,
  UsersFormDeleteComponent,
  UsersFormEditComponent,
} from './components/users-form/users-form.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { UsersMainComponent } from './components/users-main/users-main.component';
import { UsersButtonmenuComponent } from './components/users-buttonmenu/users-buttonmenu.component';
import {MatButtonModule} from '@angular/material/button';
import {AgGridModule} from "ag-grid-angular";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    UsersFormAddComponent,
    UsersFormEditComponent,
    UsersFormDeleteComponent,
    UsersGridComponent,
    UsersMainComponent,
    UsersButtonmenuComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule,
    AgGridModule,
    MatDialogModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class UsersModule { }
