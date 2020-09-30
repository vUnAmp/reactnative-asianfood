import { combineReducers } from 'redux';
import storeReducer from './Store/store.reducer';
import userReducer from './User/user.reducer';

export default combineReducers({
  store: storeReducer,
  user: userReducer,
});
