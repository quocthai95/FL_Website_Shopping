import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../shared/product.model';
import { InitService } from '../../../shared/init.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:  any;

  constructor(private route: ActivatedRoute, private initService: InitService,
    private productService: ProductService,
    private store: Store<{product: {products: ProductModel[]}}>) { }

  ngOnInit() {
    this.initService.setupStuff();
    this.product = this.productService.getProductId(+this.route.snapshot.params['id']);
  }

}
