import { createAction, props } from '@ngrx/store';

export const initMessage = createAction(
  '[Message] Init message'
);

export const showMessage = createAction(
  '[Message] Show message',
  props<{ show: boolean }>()
);

export const hideMessage = createAction(
  '[Message] Hide message',
  props<{ show: boolean }>()
);
