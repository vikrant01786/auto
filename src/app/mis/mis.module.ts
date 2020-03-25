import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
 import { MisRoutingModule } from './mis-routing.module';
// import { IntimationComponent } from './intimation/intimation.component';
// import { BillingComponent } from './billing/billing.component';
// import { ClientReportUploadedComponent } from './client-report-uploaded/client-report-uploaded.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MisRoutingModule,
    DataTablesModule
  ]
})
export class MisModule { }
