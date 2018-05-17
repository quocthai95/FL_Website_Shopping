import { Action } from '@ngrx/store';
import { ProductModel } from '../shared/product.model';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';

export class GetData implements Action {
    readonly type = GET_DATA;
    constructor(public payload:  Array<ProductModel>) {}
}

export class GetDataFromServer implements Action {
    readonly type = GET_DATA_FROM_SERVER;
    constructor() {}
}
export type ProductActions = GetData | GetDataFromServer;
