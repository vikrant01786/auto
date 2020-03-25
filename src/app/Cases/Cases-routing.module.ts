import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CaseListComponent} from './case-list/case-list.component';
import {UpdateDetailComponent} from './update-detail/update-detail.component';
import {ValuationDetailsComponent} from './valuation-details/valuation-details.component';
import {ValuationImageComponent} from './valuation-image/valuation-image.component';
import{ViewReportComponent}from './view-report/view-report.component';
const routes: Routes = [
  {
    path: 'case-list', component: CaseListComponent
  },
  {
    path: 'update-detail/:IntimationID', component: UpdateDetailComponent
  },

  {
    path: 'valuation-details/:IntimationID', component: ValuationDetailsComponent
  },

  {
    path: 'valuation-image', component: ValuationImageComponent
  },

  {
    path: 'view-report/:IntimationID', component: ViewReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
