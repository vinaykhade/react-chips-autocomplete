import { combineReducers } from 'redux';
import app from './app';
import basicUserInfoVault from './basicUserInfoReducer';
import userKycVault from './userKycReducer';

const reducers = combineReducers({
	app: app,
	basicUserInfoVault: basicUserInfoVault,
	userKycVault: userKycVault
});

export default reducers;
