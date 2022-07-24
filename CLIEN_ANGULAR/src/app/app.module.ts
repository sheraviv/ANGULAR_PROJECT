import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayuotComponent } from './components/layuot/layuot.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormGroup, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DataComponent } from './components/data/data.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { VacationsComponent } from './components/vacations/vacations.component';
import { AddVacationComponent } from './components/add-vacation/add-vacation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import {  ReactiveFormsModule } from '@angular/forms';
import { BankAccountComponent } from './components/bank-account/bank-account.component';
import { BankManiputionComponent } from './components/bank-manipution/bank-manipution.component';



@NgModule({
  declarations: [
    LayuotComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    DataComponent,
    ProductsComponent,
    AboutComponent,
    Page404Component,
    ThumbnailComponent,
    ProductDetailsComponent,
    VacationsComponent,
    AddVacationComponent,
    BankAccountComponent,
    BankManiputionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [LayuotComponent],
})
export class AppModule {}
