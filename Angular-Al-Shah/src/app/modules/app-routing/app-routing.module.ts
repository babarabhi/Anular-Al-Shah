import { AppComponent } from './../../app.component';
import { AdminGuard } from './../../guards/admin.guard';
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
{path:'mobile',canActivate:[AuthGuard], component:MobilesComponent},
{path:'dashboard', canActivate:[AuthGuard, AdminGuard], component:DashboardComponent},
{path:'login',component:LoginComponent},
{path:'start',component:AppComponent},
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
