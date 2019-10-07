import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.baseurl + '/suppliers?size=1000');
  }

  delete(id): Observable<any> {
    return this.http.delete(environment.baseurl + '/suppliers/' + id);
  }

  // create(newProduct, header): Observable<any> {
  //   return this.http.post(environment.baseurl + '/suppliers/',newSupplier, header);
  // }
  // update(newProduct, header, id): Observable<any>{
  //   return this.http.put(environment.baseurl + '/suppliers/' + id, newSupplier, header);
  // }
}
