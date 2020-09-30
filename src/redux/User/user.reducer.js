import userTypes from './user.types';

const INITIAL_USER_STATE = {
  currentUser: null,
  userInfo: {},
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case userTypes.USER_SIGNUP:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.USER_SIGNIN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
