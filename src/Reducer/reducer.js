import { combineReducers, legacy_createStore as createStore } from 'redux';
const initialState = {
  dropdownRoll: '',
  loginData: {},
  showNavbar: false,
  candidatesData: {},
  loginUserName: '',
};

export const reducers = (state = initialState, action) => {
  console.log('10::', state);
  switch (action.type) {
    case 'LOGIN_DETAILS':
      return {
        ...state,
        loginData: action.payload,
      };
    case 'SHOW_NAVBAR':
      return {
        showNavbar: action.payload,
      };
    case 'ROLL_DROPDOWN':
      return {
        ...state,
        dropdownRoll: action.payload,
      };
    case 'CANDIDATE_DETAILS':
      return {
        ...state,
        candidatesData: action.payload,
      };
    case 'LOGIN_USER_NAME':
      return {
        ...state,
        loginUserName: action.payload,
      };
    default:
      return state;
  }
};

export const myreducers = combineReducers({
  reducers,
});

