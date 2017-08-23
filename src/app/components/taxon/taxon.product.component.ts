import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TaxonsService } from '../../services/taxons.service';
import { TaxonProductsService } from '../../services/taxon.products.service';

@Component({
  selector: 'taxonProduct',
  templateUrl: './app/components/taxon/taxon.product.component.html',
  styleUrls: ['./app/components/taxon/taxon.products.component.css'],
  providers: [TaxonsService, TaxonProductsService]
})
export class TaxonProductComponent  {
  taxon = {};
  products: Product[];

  constructor(
    private taxonProductsService: TaxonProductsService,
    private taxonsService: TaxonsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.taxonProductsService.getProducts(params['id']))
      .subscribe(productObj => {
        this.products = productObj.products;
      });
    this.route.params
      .switchMap((params: Params) => this.taxonsService.getTaxon(params['id']))
      .subscribe(taxon => {
        this.taxon = taxon;
      });
  }
}
interface Product {}