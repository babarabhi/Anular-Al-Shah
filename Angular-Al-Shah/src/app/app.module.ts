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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule,  } from '@angular/material/form-field';
// import { MatNativeDateModule } from '@angular/material/core';
import { AllMaterialModule } from './modules/all-material.module';

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
    BrowserModule,
    BrowserAnimationsModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatFormFieldModule,
    // MatNativeDateModule,
    AllMaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
