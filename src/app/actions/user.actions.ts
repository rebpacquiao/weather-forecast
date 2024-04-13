import { createAction, props } from '@ngrx/store';

export const setUserMetadata = createAction(
  '[User] Set User Metadata', // Update the action name
  props<{ metadata: any }>()
);
