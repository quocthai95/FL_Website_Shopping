import * as fromProductReducer from '../store/product.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    product: fromProductReducer.State;
}

export const reducer: ActionReducerMap<AppState> = {
    product: fromProductReducer.productReducer
};


