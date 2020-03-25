import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdministrationComponent } from './administration/administration.component';
import{AddmorefieldsComponent}from './addmorefields/addmorefields.component';

const routes: Routes = [
  {path:'user/:UserID',component:AdminComponent},
  {path:'user-list', component:UserListComponent},
  {path:'administration', component:AdministrationComponent},
  {path:'addmorefields', component:AddmorefieldsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
