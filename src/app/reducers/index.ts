import { isDevMode } from '@angular/core';
import {
  MetaReducer
} from '@ngrx/store';
import { errorNode, ErrorReducer, errorState } from './error/error.reducer';
import { loadingReducer, loadingNode, loadingState } from './loader/loading.reducer';

export interface State {
  [loadingNode]: loadingState,
  [errorNode]: errorState
}

export const reducers: any = {
  [loadingNode]: loadingReducer,
  [errorNode]: ErrorReducer
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
