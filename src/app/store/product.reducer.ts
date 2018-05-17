import * as ProductActions from '../store/product.action';
import {ProductModel } from '../shared/product.model';

export interface State {
    products: ProductModel[];
}
const initialState: State = {
    products: []
};

export function productReducer(state = initialState, action: ProductActions.ProductActions ) {
    switch (action.type) {
        case ProductActions.GET_DATA:
        return {
            ...state,
            products: [...action.payload]
        };

        default:
        return state;
    }
}

