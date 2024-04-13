// reducers/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface UserState {
  userData: any;
}

const initialState: UserState = {
  userData: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.setUserMetadata, (state, { metadata }) => ({
    // Update this to setUserMetadata
    ...state,
    userData: metadata,
  }))
);
