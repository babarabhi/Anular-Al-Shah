import { Role } from './../../models/role.enum';
import { AuthGuard } from './../../guards/auth.guard';
import { MobilesComponent } from './../../products/mobiles/mobiles.component';
import { PageNotFoundComponent } from './../../Layouts/page-not-found/page-not-found.component';
import { LoginComponent } from './../../admin/login/login.component';
import { DashboardComponent } from './../../admin/dashboard/dashboard.component';
import { ProductsComponent } from './../../Layouts/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
{path:'',component:ProductsComponent},
{path:'mobile',canActivate:[AuthGuard], component:MobilesComponent, data:{roles: [Role.User]}},
{path:'dashboard', canActivate:[AuthGuard], component:DashboardComponent, data:{roles: [Role.Admin]}},
{path:'login',component:LoginComponent},
{path:'**',component:PageNotFoundComponent},


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
