import { UPDATE_PHOTO, UPDATE_AADHAR, UPDATE_PAN, UPDATE_PASSPORT } from '../actions/userKycActions';

const initialState = {
  profilePic: '',
  aadhar: '',
  pan: '',
  passport: ''
};


export default function userKycVault (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PHOTO:
      return { ...state, profilePic: action.payload };
    case UPDATE_AADHAR:
      return { ...state, aadhar: action.payload };
    case UPDATE_PAN:
      return { ...state, pan: action.payload };  
    case UPDATE_PASSPORT:
      return { ...state, passport: action.payload };  
    default:
      return state;
  }
}
