import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesRoutingModule } from './Cases-routing.module';
import { CaseListComponent } from './case-list/case-list.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { UpdateDetailComponent } from '../Cases/update-detail/update-detail.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ValuationImageComponent } from '../Cases/valuation-image/valuation-image.component';
import { ValuationDetailsComponent } from '../Cases/valuation-details/valuation-details.component';
import { ViewReportComponent } from '../Cases/view-report/view-report.component';



@NgModule({
  declarations: [CaseListComponent, UpdateDetailComponent, ValuationImageComponent, ValuationDetailsComponent, ViewReportComponent
    ],
  imports: [
    CommonModule,
    CasesRoutingModule,
    DataTablesModule,
    NgxSpinnerModule,
    PerfectScrollbarModule,
    FormsModule
  ]
})
export class CasesModule { }
