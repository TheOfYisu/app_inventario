import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatSliderModule
  ]
})
export class PublicModule { }
