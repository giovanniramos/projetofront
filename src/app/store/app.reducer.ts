import { createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';

export interface AppState {
  show: boolean | false;
}

export const initialState: AppState = {
  show: false
};

export const AppReducer = createReducer(
  initialState,
  on(AppActions.initMessage, (state) => ({ ...state, show: false })),
  on(AppActions.showMessage, (state, { show }) => ({ ...state, show: true })),
  on(AppActions.hideMessage, (state, { show }) => ({ ...state, show: false })),
);
