import CartActionTypes from './cart.types';

const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemById = id => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id
})


export default addItem
