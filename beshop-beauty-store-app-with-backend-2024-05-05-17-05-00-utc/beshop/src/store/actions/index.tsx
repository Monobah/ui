import {setTag} from '../slices/tagSlice';
import {
  addToCart,
  resetCart,
  removeFromCart,
  fullRemoveFromCart,
} from '../slices/cartSlice';
import {setScreen} from '../slices/tabSlice';
import {setStart} from '../slices/startSlice';
import {setUser, logOut} from '../slices/userSlice';
import {addToWishlist, removeFromWishlist} from '../slices/wishlistSlice';

export const actions = {
  setTag,
  logOut,
  setUser,
  setStart,
  resetCart,
  setScreen,
  addToCart,
  addToWishlist,
  removeFromCart,
  fullRemoveFromCart,
  removeFromWishlist,
};
