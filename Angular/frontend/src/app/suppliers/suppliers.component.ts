import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "../suppliers.service";


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Array<any>;

  constructor(private suppliersservice:SuppliersService) { }

  ngOnInit() {
    this.suppliersservice.getAll().subscribe(data => {
      this.suppliers = data._embedded.suppliers;
      console.log(data._embedded.suppliers);
    })

  }

}
