import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {FormBuilder, Validators} from "@angular/forms";
import {CategoriesComponent} from "../categories/categories.component";
import {SuppliersComponent} from "../suppliers/suppliers.component";
import {CategoriesService} from "../categories/categories.service";
import {SuppliersService} from "../suppliers.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;
  categories: Array<any>;
  suppliers: Array<any>;

  constructor(private productsservice:ProductsService,
              private fb: FormBuilder,
              private categoriesservice: CategoriesService,
              private suppliersservice: SuppliersService) { }

  ngOnInit() {
    this.productsservice.getAll().subscribe(data => {
      this.products = data._embedded.products;
      console.log(data._embedded.products);
    })
    this.categoriesservice.getAll().subscribe(data => {
      this.categories = data._embedded.categories;
      console.log(data._embedded.categories);
    })
    this.suppliersservice.getAll().subscribe(data => {
      this.suppliers = data._embedded.suppliers;
      console.log(data._embedded.suppliers);
    })
  }
deleteProduct(id,index){
    this.productsservice.delete(id).subscribe();
    this.products.splice(index,1)
}
  productForm = this.fb.group({
    productName: ['', Validators.required],
    fullPrice: ['', [Validators.min(0.01), Validators.max(99.99), Validators.required]],
    salePrice: ['', [Validators.min(0.01), Validators.max(99.99), Validators.required]],
    availability: [true],
    category: [0],
    supplier: [0]
  });
  onSubmit() {
    this.productsservice.create(JSON.stringify(this.productForm.value),
      { headers: new HttpHeaders({ 'Content-Type':  'application/hal+json;charset=UTF-8' })})
      .subscribe(res => console.log(res));
    location.reload();
  }
}
