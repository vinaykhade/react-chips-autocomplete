import { combineReducers } from 'redux';
import app from './app';
import basicUserInfoVault from './basicUserInfoReducer';

const reducers = combineReducers({
	app: app,
	basicUserInfoVault: basicUserInfoVault,
});

export default reducers;
