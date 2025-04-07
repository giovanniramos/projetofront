import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('data');

export const selectApp = createSelector(
  selectAppState,
  (state: AppState) => state.show
);
