import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as ProductActions from '../store/product.action';
import * as fromProductReducer from '../store/product.reducer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DOMAINAPI, showLoadingScreen, hideLoadingScreen } from '../shared/init.service';
import { ProductModel } from '../shared/product.model';

@Injectable()
export class ProductEffect {
    @Effect()
    getData = this.actions$.ofType(ProductActions.GET_DATA_FROM_SERVER)
    .switchMap(() => {
        showLoadingScreen();
        return this.httpClient.get(DOMAINAPI + 'product', {
            observe: 'body'
        });
    })
    .map((productSate: fromProductReducer.State) => {
        hideLoadingScreen();
        return {
            type: ProductActions.GET_DATA,
            payload: productSate
        };
    })
    .catch((e: any) => {
        hideLoadingScreen();
        alert('Lỗi không thể  lấy dữ liệu!');
        return Observable.throw( new Error('Lỗi không thể  lấy dữ liệu!'));
    });

    @Effect()
    createNewProduct = this.actions$.ofType(ProductActions.CREATE_NEW_PRODUCT)
    .map((action: ProductActions.CreateNewProduct) => {
        showLoadingScreen();
        return action.payload;
    })
    .switchMap((newProduct: ProductModel) => {
        return this.httpClient.post(DOMAINAPI + 'product', newProduct, {
            observe: 'body'
        });
    })
    .switchMap((response: any) => {
        hideLoadingScreen();
        return [{
            type: ProductActions.CREATE_NEW_PRODUCT_LOCAL,
            payload: response[0]
        }];
    })
    .catch((e: any) => {
        hideLoadingScreen();
        alert('Lỗi không thể tạo sản phẩm!');
        return Observable.throw( new Error('Không thể tạo sản phẩm!'));
    })
    ;

    @Effect()
    updateProduct = this.actions$.ofType(ProductActions.UPDATE_PRODUCT)
    .map((action: ProductActions.UpdateProduct) => {
        showLoadingScreen();
        return action.payload;
    })
    .switchMap((updateProduct: ProductModel) => {
        return this.httpClient.patch(DOMAINAPI + 'product/' + updateProduct.productId
        , updateProduct, {
            observe: 'body'
        });
    })
    .map(() => {
        hideLoadingScreen();
        return {
            type: ProductActions.GET_DATA_FROM_SERVER
        };
    })
    .catch((e: any) => {
        hideLoadingScreen();
        alert('Lỗi không thể cập nhật sản phẩm!');
        return Observable.throw( new Error('Không thể cật nhật sản phẩm!'));
    });

    @Effect()
    deleteProduct = this.actions$.ofType(ProductActions.DELETE_PRODUCT)
    .map((action: ProductActions.DeleteProduct) => {
        showLoadingScreen();
        return action.payload;
    })
    .switchMap((productId: string) => {
        return this.httpClient.delete(DOMAINAPI + 'product/' + productId);
    })
    .map(() => {
        hideLoadingScreen();
        return {
            type: ProductActions.GET_DATA_FROM_SERVER
        };
    })
    .catch((e: any) => {
        hideLoadingScreen();
        alert('Lỗi không thể xóa sản phẩm!');
        return Observable.throw( new Error('Không thể xóa sản phẩm!'));
    });

    constructor(private actions$: Actions, private httpClient: HttpClient) {
    }
}
