import storeTypes from './store.types';

const INITIAL_STORE_STATE = {
  oderDetails: [],
};

const storeReducer = (state = INITIAL_STORE_STATE, action) => {
  switch (action.type) {
    case storeTypes.ADD_ITEM:
      return {
        ...state,
        oderDetails: action.payload,
      };

    default:
      return state;
  }
};

export default storeReducer;
