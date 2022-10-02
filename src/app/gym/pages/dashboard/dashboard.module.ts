import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { HeadingRowComponent } from '../../components/heading-row/heading-row.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AccountComponent } from './account/account.component';
import { ResourcesModule } from '../../resources/resources.module';
import { ClasesInfoComponent } from '../../components/clases-info/clases-info.component';
import { ContentRowComponent } from '../../components/content-row/content-row.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MembershipsComponent,
    HeadingRowComponent,
    FooterComponent,
    AccountComponent,
    ClasesInfoComponent,
    ContentRowComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ResourcesModule
  ]
})
export class DashboardModule { }
