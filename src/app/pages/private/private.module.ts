import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [

        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HomeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ]
})
export class PrivateModule { }
