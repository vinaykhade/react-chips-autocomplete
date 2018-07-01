import { createAction } from 'redux-actions';

export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';
export const UPDATE_USER_PHONE = 'UPDATE_USER_PHONE';
export const UPDATE_USER_PAN = 'UPDATE_USER_PAN';
export const UPDATE_USER_COMPANY = 'UPDATE_USER_COMPANY';

export const updateUserName = createAction(UPDATE_USER_NAME);
export const updateUserEmail = createAction(UPDATE_USER_EMAIL);
export const updateUserPhone = createAction(UPDATE_USER_PHONE);
export const updateUserPan = createAction(UPDATE_USER_PAN);
export const updateUserCompany = createAction(UPDATE_USER_COMPANY);