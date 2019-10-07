import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.baseurl + '/categories');
  }


  delete(id): Observable<any> {
    return this.http.delete(environment.baseurl + '/categories/' + id);
  }

  // create(newProduct, header): Observable<any> {
  //   return this.http.post(environment.baseurl + '/categories/',newCategory, header);
  // }
  // update(newProduct, header, id): Observable<any>{
  //   return this.http.put(environment.baseurl + '/categories/' + id,newCategory, header);
  // }
}
