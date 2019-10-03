import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.baseurl + '/products?size=20&sort=id,desc');
  }

  delete(id): Observable<any> {
    return this.http.delete(environment.baseurl + '/products/' + id);
  }

create(newProduct, header): Observable<any> {
    return this.http.post(environment.baseurl + '/products',newProduct, header);
}
update(newProduct, header, id): Observable<any>{
  return this.http.put(environment.baseurl + '/products/' + id, newProduct, header);
}

}


