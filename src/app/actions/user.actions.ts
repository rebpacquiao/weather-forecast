import { createAction, props } from '@ngrx/store';

export const setUserMetadata = createAction(
  '[User] Set Metadata',
  props<{ metadata: any }>()
);
