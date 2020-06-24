import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './Layouts/navigator/navigator.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { Banner1Component } from './Layouts/banner1/banner1.component';
import { HomeComponent } from './Layouts/home/home.component';
import { ProductsComponent } from './Layouts/products/products.component';
import { ContactUsComponent } from './Layouts/contact-us/contact-us.component';
import { Banner2Component } from './Layouts/banner2/banner2.component';
import { Banner3Component } from './Layouts/banner3/banner3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FooterComponent,
    Banner1Component,
    HomeComponent,
    ProductsComponent,
    ContactUsComponent,
    Banner2Component,
    Banner3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
