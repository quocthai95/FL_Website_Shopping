import { Action } from '@ngrx/store';
import { ProductModel } from '../shared/product.model';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';
export const CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_NEW_PRODUCT_LOCAL = 'CREATE_NEW_PRODUCT_LOCAL';
export const UPDATE_PRODUCT_LOCAL = 'UPDATE_PRODUCT_LOCAL';
export const DELETE_PRODUCT_LOCAL = 'DELETE_PRODUCT_LOCAL';

export class GetData implements Action {
    readonly type = GET_DATA;
    constructor(public payload:  Array<ProductModel>) {}
}

export class GetDataFromServer implements Action {
    readonly type = GET_DATA_FROM_SERVER;
    constructor() {}
}

export class CreateNewProduct implements Action {
    readonly type = CREATE_NEW_PRODUCT;
    constructor(public payload: ProductModel) {}
}

export class UpdateProduct implements Action {
    readonly type = UPDATE_PRODUCT;
    constructor(public payload: ProductModel) {}
}

export class DeleteProduct implements Action {
    readonly type = DELETE_PRODUCT;
    constructor(public payload: string) {}
}

export class CreateNewProductLocal implements Action {
    readonly type = CREATE_NEW_PRODUCT_LOCAL;
    constructor(public payload: ProductModel) {}
}

export class UpdateProductLocal implements Action {
    readonly type = UPDATE_PRODUCT_LOCAL;
    constructor(public payload: ProductModel) {}
}

export class DeleteProductLocal implements Action {
    readonly type = DELETE_PRODUCT_LOCAL;
    constructor(public payload: string) {}
}

export type ProductActions = GetData | GetDataFromServer | CreateNewProduct | UpdateProduct
| DeleteProduct | CreateNewProductLocal | UpdateProductLocal | DeleteProductLocal;
