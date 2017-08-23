import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './app/components/product/product.component.html',
  providers: [ProductService]
})
export class ProductComponent {
  product = {};
  options: Option[];
  image: Image[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(params['slug']))
      .subscribe(productObj => {
        this.product = productObj;
        console.log(this.product);
        this.image = productObj.master.images[0].product_url;
        productObj.variants.forEach((variant: any) => {
          variant.option_values.forEach((option: any) => {
            this.options.push({
              variant_id: variant.id,
              option_type_name: option.option_type_name,
              option_presentation: option.presentation,
              images: variant.images
            });
          });
        });
      });
  }

  public changeImage(url: string) {
    let prodImage = document.getElementById("changedImage") as HTMLImageElement;
    prodImage.src = 'http://139.162.34.44:8084' + url;
  }
}
interface Option {}
interface Image {}