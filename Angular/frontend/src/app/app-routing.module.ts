import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CategoriesComponent} from "./categories/categories.component";
import {SuppliersComponent} from "./suppliers/suppliers.component";


const routes: Routes = [
  {path: 'products', component: ProductsComponent },
  {path: 'categories', component: CategoriesComponent },
  {path: 'suppliers', component: SuppliersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
