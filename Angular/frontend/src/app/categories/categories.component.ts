import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "./categories.service";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any>;

  constructor(private categoriesservice:CategoriesService) { }

  ngOnInit() {
    this.categoriesservice.getAll().subscribe(data => {
      this.categories = data._embedded.categories;
      console.log(data._embedded.categories);
    })

  }

}
