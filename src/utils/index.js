import * as R from 'ramda'
import { PAN_REGEX } from '../constants/constants';

export const isValidPanNumber = (panNumber) => {
	return PAN_REGEX.test(panNumber);
}

export const checkIfPropExistsInObject = (inputObject, propName) => {
	const hasProp = R.has(propName);
	return hasProp(inputObject);
}