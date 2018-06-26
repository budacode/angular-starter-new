// import { createSelector, createFeatureSelector } from '@ngrx/store';

// import * as AuthActions from '../actions/auth.action';
// import { Status } from '../interfaces';

// export interface State {
//   authenticated: boolean;
//   accessToken: string;
//   refreshToken: string;
//   expiresIn: string;
//   status: Status;
//   user: RT90.IUser;
// }

// const initialState: State = {
//   authenticated: false,
//   accessToken: null,
//   refreshToken: null,
//   expiresIn: null,
//   status: Status.Default,
//   user: null,
// };

// export function reducer(state: State = initialState, action: AuthActions.Actions): State {
//   switch (action.type) {
//     case AuthActions.SET_LOGIN_STATUS: {
//       return {
//         ...state,
//         status: action.payload,
//       };
//     }

//     case AuthActions.SET_TOKEN: {
//       return {
//         ...state,
//         authenticated: true,
//         accessToken: action.payload.accessToken,
//         refreshToken: action.payload.refreshToken,
//         expiresIn: action.payload.expiresIn,
//         user: action.payload.user,
//       };
//     }

//     case AuthActions.EXTEND_USER: {
//       return {
//         ...state,
//         user: action.payload,
//       };
//     }

//     case AuthActions.REMOVE_TOKEN: {
//       return initialState;
//     }

//     default: {
//       return state;
//     }
//   }
// }

// export const selectAuthState = createFeatureSelector<State>('auth');
// export const selectAuthenticatedState = createSelector(selectAuthState, (state: State) => state.authenticated);
// export const selectAuthStatus = createSelector(selectAuthState, (state: State) => state.status);
// export const selectUser = createSelector(selectAuthState, (state: State) => state.user);
