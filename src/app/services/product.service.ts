import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  constructor(private http: Http) {}

  getProduct(slug: string) {
    return this.http.get('http://139.162.34.44:8084/api/v1/products/' + slug)
            .map(res => res.json());
  }
}