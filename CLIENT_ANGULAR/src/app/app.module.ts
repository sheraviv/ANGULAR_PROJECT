import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayuotComponent } from './components/layuot/layuot.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { FormGroup, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
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
    
    AboutComponent,
    Page404Component,
    
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
