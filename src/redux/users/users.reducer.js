import { combineReducers } from 'redux';

import { userInitState } from './users.init-state';
import { DELETE_USERS, SEARCH } from './users.types';

const searchReducer = (state = userInitState.search, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return payload;

    default:
      return state;
  }
};

const usersListsReducer = (state = userInitState.data, { type, payload }) => {
  switch (type) {
    case DELETE_USERS:
      return state.filter(user => user.id !== payload);
    default:

      return state;
  }
};
export const uesersReducer = combineReducers({
  search: searchReducer,
  data: usersListsReducer,
});

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
