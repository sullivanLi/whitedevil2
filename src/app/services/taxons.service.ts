import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaxonsService {
  constructor(private http: Http) {}

  getTaxons() {
    return this.http.get('http://139.162.34.44:8084/api/v1/taxonomies')
            .map(res => res.json());
  }

  getTaxon(id: number) {
    return this.http.get('http://139.162.34.44:8084/api/v1/taxonomies/' + id)
            .map(res => res.json());
  }
}