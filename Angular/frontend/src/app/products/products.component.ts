import {Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ProductsService} from "../products.service";
import {FormBuilder, Validators} from "@angular/forms";
import {CategoriesComponent} from "../categories/categories.component";
import {SuppliersComponent} from "../suppliers/suppliers.component";
import {CategoriesService} from "../categories/categories.service";
import {SuppliersService} from "../suppliers.service";
import {HttpHeaders} from "@angular/common/http";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../product";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {Observable} from "rxjs";

 const CATEGORIES = ['Baby', 'Beauty', 'Food', 'Garden','Health','Household','International','Pet','Toys','Wine & Beer'];



//sortable table ordering
export type SortDirection = 'asc' | 'desc' | '';

const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;


//sorting column and direction
export interface SortEvent {
  column: string;
  direction: SortDirection;
}



@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


product: Product;
  page = 1;

  products: Product[];
  dataproducts: Product[];

  categories: Array<any>;
  suppliers: Array<any>;

constructor(private productsservice:ProductsService,
              private fb: FormBuilder,
              private categoriesservice: CategoriesService,
              private suppliersservice: SuppliersService) { }


  ngOnInit() {
    this.productsservice.getAll().subscribe(data => {
      this.products = data._embedded.products;
      this.dataproducts = this.products;
      console.log(this.products);
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

  //post
  onSubmit() {
    this.productsservice.create(JSON.stringify(this.productForm.value),
      { headers: new HttpHeaders({ 'Content-Type':  'application/hal+json;charset=UTF-8' })})
      .subscribe(res => console.log(res));
    location.reload();
  }

//put
  editSubmit(id) {
    this.productsservice.update(JSON.stringify(this.productForm.value),
      { headers: new HttpHeaders({ 'Content-Type':  'application/hal+json;charset=UTF-8' })},
    id)
      .subscribe(res => console.log(res));
    //location.reload();
  }

//sortable table
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {



    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting products
    if (direction === '') {
      this.products = this.dataproducts;
    } else {
      this.products = [...this.dataproducts].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
      console.log(direction);
    }
  }



//typeahead boilerplate
  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : CATEGORIES.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
      );

//category input
    public model:any;

    //function to search products by category
   searchByCat() {

     let prod;
     this.productsservice.getAll().subscribe(data => {
        prod = data._embedded.products;
       let searchCat = this.model;
       let productsInCat = [];
       prod.forEach(function(product){
           if (product._embedded.category.categoryName == searchCat) {
             productsInCat.push(product)
           }
         }
       )
       //print array of only products in category to console
       console.log(productsInCat)

     })


   }

}
