import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';


import {AppComponent} from "./app.component";
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/shared/header.component';
import {FooterComponent} from './components/shared/footer.component';
import {TaxonProductComponent} from './components/taxon/taxon.product.component';
import {ProductComponent} from './components/product/product.component';
import {routing, appRoutingProviders} from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TaxonProductComponent,
    ProductComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}