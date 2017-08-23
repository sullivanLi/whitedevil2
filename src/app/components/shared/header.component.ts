import { Component } from '@angular/core';
import { TaxonsService } from '../../services/taxons.service';

@Component({
  selector: 'wd-header',
  templateUrl: './app/components/shared/header.component.html',
  styleUrls: ['./app/components/shared/header.component.css'],
  providers: [TaxonsService]
})
export class HeaderComponent {
  taxons: Taxon[];

  constructor(private taxonsService: TaxonsService) {
    this.taxonsService.getTaxons().subscribe(taxons => {
      this.taxons = taxons.taxonomies;
    });
  }
}

interface Taxon {
  id: number;
  name: string;
}