import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NewIntimationComponent} from './new-intimation/new-intimation.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new-intimation/:IntimationID', component: NewIntimationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
