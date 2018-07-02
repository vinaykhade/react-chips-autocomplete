import { createAction } from 'redux-actions';

export const ADD_BANK_ACCOUNT = 'ADD_BANK_ACCOUNT';
export const UPDATE_BANK_ACCOUNT = 'UPDATE_BANK_ACCOUNT';

export const addBankAccount = createAction(ADD_BANK_ACCOUNT);
export const updateBankRecords = createAction(UPDATE_BANK_ACCOUNT);
