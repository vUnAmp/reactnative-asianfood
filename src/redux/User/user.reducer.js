import userTypes from './user.types';

const INITIAL_USER_STATE = {
  isOnline: false,
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case userTypes.USER_SIGNUP:
      return {
        ...state,
      };

    default:
      return state;
  }
};
