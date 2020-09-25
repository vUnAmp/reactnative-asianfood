import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import storeReducer from './Store/store.reducer';
import rootReducer from './rootReducer';

const middleWares = [thunk];
const composeEnhancers = compose;

export const store = createStore(
  rootReducer
  //   composeEnhancers(applyMiddleware(...middleWares))
);
