import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTablesModule } from 'angular-datatables';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NewIntimationComponent } from './new-intimation/new-intimation.component';
@NgModule({
  declarations: [DashboardComponent, NewIntimationComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataTablesModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxSpinnerModule

  ]
})
export class DashboardModule { }
