import { createAction } from 'redux-actions';

export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const UPDATE_AADHAR = 'UPDATE_AADHAR';
export const UPDATE_PAN = 'UPDATE_PAN';
export const UPDATE_PASSPORT = 'UPDATE_PASSPORT';

export const updateUserPhoto = createAction(UPDATE_PHOTO);
export const updateAadharCard = createAction(UPDATE_AADHAR);
export const updatePanCard = createAction(UPDATE_PAN);
export const updatePassportCopy = createAction(UPDATE_PASSPORT);
