import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any>;

  constructor(private productsservice:ProductsService) { }

  ngOnInit() {
    this.productsservice.getAll().subscribe(data => {
      this.products = data._embedded.products;
      console.log(data._embedded.products);
    })

  }

}
