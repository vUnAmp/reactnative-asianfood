import { combineReducers } from 'redux';
import storeReducer from './Store/store.reducer';

export default combineReducers({
  store: storeReducer,
});
