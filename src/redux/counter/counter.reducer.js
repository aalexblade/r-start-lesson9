import { counterInitState } from './counter.init-state';
import { COUNTER } from './counter.types';

export const counterReducer = (state = counterInitState, action) => {
  switch (action.type) {
    case COUNTER:
      return state + action.payload;

    default:
      return state;
  }
};

// import { counterAction } from './counter.action';
// import { counterInitState } from './counter.init-state';

// export const counterReducer = createReducer(counterInitState, builder => {
//   builder.addCase(counterAction, (state, { payload }) => {
//     return state + payload;
//   });
// });
