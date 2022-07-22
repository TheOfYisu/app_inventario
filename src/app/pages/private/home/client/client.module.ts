import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientMainComponent } from './components/client-main/client-main.component';
import { ClientGridComponent } from './components/client-grid/client-grid.component';
import { ClientFormComponent } from './components/client-form/client-form.component';


@NgModule({
  declarations: [
    ClientMainComponent,
    ClientGridComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
