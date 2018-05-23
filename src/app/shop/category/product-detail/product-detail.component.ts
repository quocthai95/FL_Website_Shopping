import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../../shared/product.model';
import { InitService } from '../../../shared/init.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAppReducer from '../../../store/app.reducer';
import * as fromProductReducer from '../../../store/product.reducer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { map } from 'rxjs/operator/map';
import { SharedDataService } from '../../../shared/shared-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:  Observable<ProductModel>;

  constructor(private route: ActivatedRoute, private router: Router, private initService: InitService,
    private store: Store<fromAppReducer.AppState>, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.initService.setupStuff();
    this.product = this.store.select('product')
    .map((productsState: fromProductReducer.State) => {
      return productsState.products[+this.route.snapshot.params['id'] - 1];
    });
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
    this.product.first().subscribe((item: ProductModel) => {
      this.saveCartDataToLocal(item);
    });
    this.sharedDataService.cartItemsObs.next(JSON.parse(localStorage.getItem('productOrder')).length);
    this.router.navigate(['/shop/cart']);
  }

}
