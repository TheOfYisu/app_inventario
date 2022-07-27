import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggridRoutingModule } from './aggrid-routing.module';
import { AggridMainComponent } from './aggrid-main/aggrid-main.component';


@NgModule({
  declarations: [
    AggridMainComponent
  ],
  imports: [
    CommonModule,
    AggridRoutingModule
  ]
})
export class AggridModule { }
