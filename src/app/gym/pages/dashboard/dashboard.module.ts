import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { HeadingRowComponent } from '../../components/heading-row/heading-row.component';
import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MembershipsComponent,
    HeadingRowComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
