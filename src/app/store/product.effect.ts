import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as ProductActions from '../store/product.action';
import * as fromProductReducer from '../store/product.reducer';
import 'rxjs/add/operator/switchMap';
import { HttpClient } from '@angular/common/http';
import { DOMAINAPI } from '../shared/init.service';
import { ProductModel } from '../shared/product.model';

@Injectable()
export class ProductEffect {
    @Effect()
    getData = this.actions$.ofType(ProductActions.GET_DATA_FROM_SERVER)
    .switchMap(() => {
        return this.httpClient.get(DOMAINAPI + 'product', {
            observe: 'body'
        });
    })
    .map((productSate: fromProductReducer.State) => {
        return {
            type: ProductActions.GET_DATA,
            payload: productSate
        };
    });

    @Effect()
    createNewProduct = this.actions$.ofType(ProductActions.CREATE_NEW_PRODUCT)
    .map((action: ProductActions.CreateNewProduct) => {
        return action.payload;
    })
    .switchMap((newProduct: ProductModel) => {
        return this.httpClient.post(DOMAINAPI + 'product', newProduct, {
            observe: 'body'
        });
    })
    .map(() => {
        return {
            type: ProductActions.GET_DATA_FROM_SERVER
        };
    });

    constructor(private actions$: Actions, private httpClient: HttpClient) {
    }
}
