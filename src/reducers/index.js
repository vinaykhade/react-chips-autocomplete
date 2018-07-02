import { combineReducers } from 'redux';
import app from './app';
import basicUserInfoVault from './basicUserInfoReducer';
import userKycVault from './userKycReducer';
import bankAccountsVault from './bankAccountsReducer';

const reducers = combineReducers({
	app: app,
	basicUserInfoVault: basicUserInfoVault,
	userKycVault: userKycVault,
	bankAccountsVault: bankAccountsVault
});

export default reducers;
