import { createAction } from '@reduxjs/toolkit';

// import { DELETE_USERS, SEARCH } from './users.types';

// export const usersSearchActions = payload => ({ type: SEARCH, payload });
// export const deleteUserActions = payload => ({ type: DELETE_USERS, payload });

export const usersSearchActions = createAction('SEARCH');
export const deleteUserActions = createAction('DELETE_USERS');
