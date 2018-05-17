import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as ProductActions from '../store/product.action';
import * as fromProductReducer from '../store/product.reducer';
import 'rxjs/add/operator/switchMap';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductEffect {
    @Effect()
    getData = this.actions$.ofType(ProductActions.GET_DATA_FROM_SERVER)
    .switchMap(() => {
        return this.httpClient.get('assets/products.json', {
            observe: 'body'
        });
    })
    .map((productSate: fromProductReducer.State) => {
        return {
            type: ProductActions.GET_DATA,
            payload: productSate
        };
    });

    constructor(private actions$: Actions, private httpClient: HttpClient) {
    }
}
