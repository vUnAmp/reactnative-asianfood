import userTypes from './user.types';

export const userSignInWithEmailandPassword = () => ({
  type: userTypes.USER_SIGNIN,
  payload: true,
});
export const userSignupWithEmailandPassword = () => ({
  type: userTypes.USER_SIGNUP,
  payload: true,
});

export const userCheckInfo = (data) => ({
  type: userTypes.USER_INFO,
  payload: data,
});

export const userLogOut = () => {};
