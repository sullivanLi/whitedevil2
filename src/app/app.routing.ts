import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {TaxonProductComponent} from './components/taxon/taxon.product.component';
import {ProductComponent} from './components/product/product.component';
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'taxons/:id', component: TaxonProductComponent },
  { path: 'products/:slug', component: ProductComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
