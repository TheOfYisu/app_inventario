import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { LoginRoutingModule } from './login-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class LoginModule { }
