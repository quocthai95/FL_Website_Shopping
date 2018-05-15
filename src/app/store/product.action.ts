import { Action } from '@ngrx/store';
import { ProductModel } from '../shared/product.model';

export const GET_DATA = 'GET_DATA';

export class GetData implements Action {
    readonly type = GET_DATA;
    constructor(public payload:  Array<ProductModel>) {}
}
export type ProductActions = GetData;
