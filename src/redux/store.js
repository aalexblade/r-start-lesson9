import { createStore } from 'redux';

const reducer = (state, action) => {
  // console.log(state, action);
  if (action.type === 'PLUSE') {
    return { counter: state.counter + 1 };
  }

  if (action.type === 'MINUS') {
    return { counter: state.counter - 1 };
  }
  return state;
};
const store = createStore(reducer, { counter: 0 });

console.log(store.getState());
store.dispatch({ type: 'PLUSE' });
store.dispatch({ type: 'MINUS' });
console.log(store.getState());

// ===========================================
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { counterInitState } from './counter/counter.init-state';
// import { counterReducer } from './counter/counter.reducer';
// import { postsInitState } from './posts/posts.init-state';
// import { postsReducer } from './posts/posts.slice';
// import { postsApi } from './rtk-posts/rtk-posts.api';
// import { userInitState } from './users/users.init-state';
// import { usersReducer } from './users/users.slice';

// const initState = {
//   counter: counterInitState,
//   users: userInitState,
//   posts: postsInitState,
// };

// export const store = configureStore({
//   preloadedState: initState,
//   devTools: true,
//   reducer: {
//     counter: counterReducer,
//     users: usersReducer,
//     posts: postsReducer,

//     [postsApi.reducerPath]: postsApi.reducer,
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat([postsApi.middleware]),
// });

// export const persistor = persistStore(store);
