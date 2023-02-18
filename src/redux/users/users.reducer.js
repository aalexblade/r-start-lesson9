import { createReducer } from '@reduxjs/toolkit';

import { deleteUserActions, usersSearchActions } from './users.actions';
import { userInitState } from './users.init-state';

// ==========================redux=======================
// import { DELETE_USERS, SEARCH } from './users.types';

// const searchReducer = (state = userInitState.search, { type, payload }) => {
//   switch (type) {
//     case SEARCH:
//       return payload;

//     default:
//       return state;
//   }
// };
//  ==================redux-toolkit====================
// const searchReducer = createReducer(userInitState.search, builder => {
//   builder.addCase(usersSearchActions, (_, { payload }) => payload);
// });

// ==========================redux=======================
// const usersListsReducer = (state = userInitState.data, { type, payload }) => {
//   switch (type) {
//     case DELETE_USERS:
//       return state.filter(user => user.id !== payload);
//     default:

//       return state;
//   }
// };

// ==================redux-toolkit====================
// const usersListsReducer = createReducer(userInitState.data, builder => {
//   builder.addCase(deleteUserActions, (state, { payload }) =>
//     state.filter(user => user.id !== payload),
//   );
// });

// export const uesersReducer = combineReducers({
//   search: searchReducer,
//   data: usersListsReducer,
// });
// ==========================redux=======================
// export const uesersReducer = (state = userInitState, { type, payload }) => {
//   switch (type) {
//     case SEARCH:
//       return { ...state, search: payload };

//     case DELETE_USERS:
//       return { ...state, data: state.data.filter(user => user.id !== payload) };

//     default:
//       return state;
//   }
// };

export const usersReducer = createReducer(userInitState, bilder => {
  bilder.addCase(usersSearchActions, (state, { payload }) => {
    // return { ...state, search: payload };
    state.search = payload;
  }).addCase(deleteUserActions, (state, { payload }) => {
    state.data = state.filter(user => user.id !== payload);
  });
});
