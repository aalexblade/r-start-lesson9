import { DELETE_USERS } from '../users/users.types';

import { COUNTER } from './counter.types';

export const counterAction = (payload) => ({ type: COUNTER, payload });
export const deleteUserAction = payload => ({ type: DELETE_USERS, payload });

// import { createAction } from '@reduxjs/toolkit';

// export const counterAction = createAction('COUNTER');
