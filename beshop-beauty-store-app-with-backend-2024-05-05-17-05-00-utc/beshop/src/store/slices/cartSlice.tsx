import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {ProductType} from '../../types';

import {utils} from '../../utils';

const initialState = {
  list: [] as ProductType[],
  total: 0,
  discount: 2.88,
  delivery: 'free',
};

type StateType = typeof initialState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: StateType = initialState,
      action: PayloadAction<ProductType>,
    ) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item: ProductType) => {
          if (item.id === action.payload.id) {
            if (item.quantity) {
              item.quantity += 1;
            }
          }
          return item;
        }, state);
        // state.total += action.payload.price;
        // price string to number
        state.total += Number(action.payload.price);
        utils.showMessage({
          message: 'Success',
          description: `you have ${inCart.quantity} ${action.payload.name} in cart`,
          type: 'info',
          icon: 'success',
        });
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.total += Number(action.payload.price);
        utils.showMessage({
          message: 'Success',
          description: `${action.payload.name} added to cart`,
          type: 'success',
          icon: 'success',
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id && (item.quantity as number) > 1) {
            if (item.quantity) {
              item.quantity -= 1;
              utils.showMessage({
                message: 'Success',
                description: `you have ${item.quantity} ${action.payload.name} in cart`,
                type: 'info',
                icon: 'success',
              });
            }
          } else if (item.id === action.payload.id && item.quantity === 1) {
            state.list.splice(state.list.indexOf(item), 1);
            // if cart is empty
            if (state.list.length === 0) {
              utils.showMessage({
                message: 'Success',
                description: `Cart cleared`,
                type: 'success',
                icon: 'success',
              });
            }

            // if cart is not empty
            if (state.list.length > 0) {
              utils.showMessage({
                message: 'Success',
                description: `${action.payload.name} removed from cart`,
                type: 'warning',
                icon: 'success',
              });
            }
          }
          return item;
        }, state);
        state.total -= Number(action.payload.price);
      }
    },

    fullRemoveFromCart: (state, action) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id) {
            state.total -= item.price * (item.quantity as number);
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
      }
    },

    resetCart: (state) => {
      state.list = [];
      state.total = 0;
      // utils.showMessage({
      //   message: 'Success',
      //   description: `Cart cleared`,
      //   type: 'success',
      //   icon: 'success',
      // });
    },
  },
});

export const {addToCart, removeFromCart, resetCart, fullRemoveFromCart} =
  cartSlice.actions;

export default cartSlice.reducer;
