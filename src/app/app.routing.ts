import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
// import { AuthenticationLayoutComponent } from './common/authentication-layout.component';
import { LoginComponent } from './common/login.component';


export const AppRoutes: Routes = [
    {
    path: '',
    component: LoginComponent
    },
    {

        path: '',
        component: CommonLayoutComponent,
        children: [
            {
                path: 'Dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                runGuardsAndResolvers: 'always',
              },
              {
                path: 'Cases',
                loadChildren: './Cases/Cases.module#CasesModule',
                runGuardsAndResolvers: 'always',
              },
              {
                path: 'mis',
                loadChildren: './mis/mis.module#MisModule',
                runGuardsAndResolvers: 'always',
              },
              {
                path: 'user-management',
                loadChildren: './user-management/user-management.module#UserManagementModule',
                runGuardsAndResolvers: 'always',
              }
        ]
    }
];

