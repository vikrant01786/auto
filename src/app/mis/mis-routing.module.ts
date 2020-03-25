import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {IntimationComponent} from './intimation/intimation.component';
// import {BillingComponent} from './billing/billing.component';
// import {ClientReportUploadedComponent} from './client-report-uploaded/client-report-uploaded.component';
const routes: Routes = [
  // {path:'intimation', component:IntimationComponent},
  // {path:'billing',component:BillingComponent},
  // {path:'client-report-uploaded',component:ClientReportUploadedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisRoutingModule { }
