import { Action } from '@ngrx/store';
import { ProductModel } from '../shared/product.model';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_ID = 'GET_PRODUCT_ID';

export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;
    constructor() {}
}

export class GetProductId implements Action {
    readonly type = GET_PRODUCT_ID;
    constructor(public payload: {index: number}) {}

}

export type ProductActions = GetProducts | GetProductId;
