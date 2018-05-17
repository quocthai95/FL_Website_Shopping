import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../shared/product.model';
import { InitService } from '../../../shared/init.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromAppReducer from '../../../store/app.reducer';
import * as fromProductReducer from '../../../store/product.reducer';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:  Observable<ProductModel>;

  constructor(private route: ActivatedRoute, private initService: InitService,
    private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.initService.setupStuff();
    this.product = this.store.select('product')
    .map((productsState: fromProductReducer.State) => {
      return productsState.products[+this.route.snapshot.params['id'] - 1];
    });
  }

}
