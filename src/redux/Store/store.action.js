import storeTypes from './store.types';
import storeTyoes from './store.types';

export const addProduct = (num) => ({
  type: storeTypes.ADD_ITEM,
  payload: num,
});
