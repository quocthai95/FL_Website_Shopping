import * as ProductActions from '../store/product.action';

const initialState = {
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

