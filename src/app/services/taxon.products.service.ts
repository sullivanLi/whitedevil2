import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaxonProductsService {
  constructor(private http: Http) {}

  getProducts(id: number) {
    return this.http.get('http://139.162.34.44:8084/api/v1/taxons/products?id=' + id)
            .map(res => res.json());
  }
}