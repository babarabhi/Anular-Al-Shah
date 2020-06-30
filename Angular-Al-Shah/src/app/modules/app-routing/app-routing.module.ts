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
{path:'dashboard', canActivate:[AuthGuard], component:DashboardComponent},
{path:'login',component:LoginComponent},
{path:'**',component:PageNotFoundComponent},
{path:'mobile',component:MobilesComponent}

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
