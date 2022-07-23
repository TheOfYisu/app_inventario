import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from "@angular/material/table";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
