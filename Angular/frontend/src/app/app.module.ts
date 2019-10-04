import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbdSortableHeader, ProductsComponent} from './products/products.component';
import {CategoriesComponent} from './categories/categories.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    NavbarComponent,
    SuppliersComponent,
    NgbdSortableHeader,
  ],
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  ReactiveFormsModule,
  NgbModule,
  FormsModule
],
  providers: [],
  bootstrap: [
  AppComponent,
],
  exports: [
    NgbTypeahead
  ]
})

export class AppModule {
}
