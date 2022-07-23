import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [

    HomeComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HomeModule
  ]
})
export class PrivateModule { }
