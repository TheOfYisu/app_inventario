import {NgModule, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from "@angular/material/form-field";
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { InventarioComponent } from './container/inventario/inventario.component';
import { ContainerComponent } from './container/container.component';
import {MatAccordion, MatExpansionModule} from "@angular/material/expansion";


@NgModule({
    declarations: [
        DashboardComponent,
        InventarioComponent,
        ContainerComponent,
    ],
    exports: [
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatExpansionModule
  ]
})
export class HomeModule {

}
