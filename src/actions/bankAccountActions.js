import { createAction } from 'redux-actions';

export const ADD_BANK_ACCOUNT = 'ADD_BANK_ACCOUNT';
export const UPDATE_BANK_ACCOUNT = 'UPDATE_BANK_ACCOUNT';

export const addNewBankAccount = createAction(ADD_BANK_ACCOUNT);
export const updateBankAccount = createAction(UPDATE_BANK_ACCOUNT);