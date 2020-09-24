import storeTypes from './store.types';
import storeTyoes from './store.types';

export default addItem = (num) => ({
  type: storeTypes.ADD_ITEM,
  payload: num,
});
