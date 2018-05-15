import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/product.action';

@Injectable()
export class ProductService {
    constructor(private httpClient: HttpClient, private store: Store<{product: {products: ProductModel[]}}>) {
        this.getData();
    }


    getData() {
        this.httpClient.get('assets/products.json', {
            observe: 'body'
        }).subscribe((data: ProductModel[]) => {
            this.store.dispatch(new ProductActions.GetData(data));
        });
    }

    getProducts() {
        return this.store.select('product');
    }

    getProductId(id: number)  {
        return this.store.select(state => state.product.products[id - 1]);
    }
}

