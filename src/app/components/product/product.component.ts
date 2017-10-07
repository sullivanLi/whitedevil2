import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './app/components/product/product.component.html',
  styleUrls: ['./app/components/product/product.component.css'],
  providers: [ProductService]
})
export class ProductComponent {
  product = {};
  options: Option[];
  option_images = {};
  basic_images: Image[];
  color = "";


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(params['slug']))
      .subscribe(productObj => {
        this.product = productObj;
        this.basic_images = productObj.master.images;
        this.options = [];
        productObj.variants.forEach((variant: any) => {
          variant.option_values.forEach((option) => {
            this.options.push({
              variant_id: variant.id,
              options_text: option.presentation,
            });
          });
          this.option_images[variant.id] = variant.images;
        });

        productObj.product_properties.forEach((property: any) => {
          this.color = property.value;
        });

      });
  }

  public addImage(variant_id: string) {
    let gallery_div = document.querySelector('#gallery');
    let optional_images = gallery_div.querySelectorAll('.optional');
    removeImage(gallery_div, optional_images);
    this.option_images[variant_id].forEach((image: any) => {
      let img = document.createElement('img');
      img.className = 'optional';
      img.src = 'http://139.162.34.44:8084' + image.product_url;
      gallery_div.insertBefore(img, gallery_div.firstChild);
    });
  }

  function removeImage(parent: object, images: array) {
    images.forEach((image:any) => {
      parent.removeChild(image);
    });
  }

}
interface Option {}
interface Image {}
