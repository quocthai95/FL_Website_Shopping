import * as fromProductReducer from '../store/product.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

export interface AppState {
    product: fromProductReducer.State;
}

export const reducer: ActionReducerMap<AppState> = {
    product: fromProductReducer.productReducer
};
