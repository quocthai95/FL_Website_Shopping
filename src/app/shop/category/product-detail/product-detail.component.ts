import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductModel } from '../../../shared/product.model';
import { InitService, DOMAINAPI } from '../../../shared/init.service';
import { Observable } from 'rxjs/Observable';
import { SharedDataService } from '../../../shared/shared-data.service';
import { HttpClient } from '@angular/common/http';
import { QueryParamsHandling } from '@angular/router/src/config';

declare const $: any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:  ProductModel = {
    _id: null,
    productId: null,
    productName: null,
    category: '',
    price: null,
    discount: null,
    image: [],
    description: [],
    sale: false,
    new: false,
    hot: false,
    amount: null
  };
  productId: string;

  constructor(private route: ActivatedRoute, private router: Router,
  private initService: InitService, private sharedDataService: SharedDataService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.productId = params['id'];
        this.httpClient.get(DOMAINAPI + 'product/' + this.productId).subscribe(
          (response: any) => {
            if (response) {
              this.product = response;
            } else {
              this.router.navigate(['not-found']);
            }
          }
        );
      }
    );
  }

  productDetailGallery(e, element) {
   this.switchImage($(element));
   e.preventDefault();
  }

  switchImage(thumb) {
    $('.thumb').removeClass('active');
    const bigUrl = thumb.attr('href');
    thumb.addClass('active');
    $('#mainImage img').attr('src', bigUrl);
  }

  saveCartDataToLocal(item) {
    if (localStorage.getItem('productOrder')) {
      const productOrder = JSON.parse(localStorage.getItem('productOrder'));
      productOrder.push(item);
      localStorage.setItem('productOrder', JSON.stringify(productOrder));
    } else {
      localStorage.setItem('productOrder', JSON.stringify([item]));
    }
  }

  addCart() {
    this.saveCartDataToLocal(this.product);
    this.sharedDataService.cartItemsObs.next(JSON.parse(localStorage.getItem('productOrder')).length);
    this.router.navigate(['/shop/cart']);
  }

}
