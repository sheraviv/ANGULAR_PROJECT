import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

import { BankAccountComponent } from './components/bank-account/bank-account.component';
import { BankManiputionComponent } from './components/bank-manipution/bank-manipution.component';

import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [

  

  { path: 'bank-account', component: BankAccountComponent },
  { path: 'bank-manipulations', component: BankManiputionComponent },
  { path: 'about', component: AboutComponent },

  
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
