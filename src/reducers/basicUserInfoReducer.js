import { UPDATE_USER_NAME, UPDATE_USER_EMAIL, UPDATE_USER_PHONE, UPDATE_USER_PAN, UPDATE_USER_COMPANY } from '../actions/basicUserInfoActions';

const initialState = {
  userName: '',
  userEmail: '',
  userPhoneNum: null,
  userPanNo: '',
  userCompany: ''
};

export default function basicUserInfo (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return { ...state, userName: action.payload };
    case UPDATE_USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case UPDATE_USER_PHONE:
      return { ...state, userPhoneNum: action.payload };
    case UPDATE_USER_PAN:
      return { ...state, userPanNo: action.payload }; 
    case UPDATE_USER_COMPANY:
      return { ...state, userCompany: action.payload };        
    default:
      return state;
  }
}
