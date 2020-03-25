import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import {DataTablesModule} from 'angular-datatables';
import { AdministrationComponent } from './administration/administration.component';
import { AddmorefieldsComponent } from './addmorefields/addmorefields.component';


@NgModule({
  declarations: [AdminComponent, UserListComponent, AdministrationComponent, AddmorefieldsComponent],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
