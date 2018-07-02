import { ADD_BANK_ACCOUNT, UPDATE_BANK_ACCOUNT } from '../actions/basicUserInfoActions';
import * as R from 'ramda';

const initialState = [];

export const removeItemFromArray = (array, index) => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];


export default function bankAccountsVault (state = initialState, action) {
  console.log("checking", action)
  switch (action.type) {
    case 'ADD_BANK_ACCOUNT':
      return R.prepend(action.payload, state);
    case 'UPDATE_BANK_ACCOUNT':
      const index = state.findIndex(record => record.account_num === action.payload);
      if (index >= 0) {
        const newRecord = removeItemFromArray(state, index);
        return newRecord;
      }
      return state;
    default:
      return state;
  }
}
