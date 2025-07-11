import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';
import {addToCart} from '../store/slices/cartSlice';
import {removeFromCart} from '../store/slices/cartSlice';

type Props = {
  version?: number;
  item: ProductType;
  containerStyle?: object;
};

const ProductInCart: React.FC<Props> = ({
  item,
  version = 1,
  containerStyle,
}): JSX.Element => {
  const dispatch = hooks.useDispatch();
  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const exist = (item: ProductType) => cart.find((i) => i.id === item.id);
  const strokeColor = exist(item)
    ? theme.colors.accent
    : theme.colors.mainColor;

  const itemExistMessage = () => {
    return Alert.alert(
      'Product already in cart',
      'Are you sure you want to delete from cart ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(removeFromCart(item));
          },
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={{...containerStyle}}
      onPress={() => {
        if (exist(item)) {
          itemExistMessage();
        }
        if (!exist(item)) {
          dispatch(addToCart(item));
        }
      }}
    >
      {version === 1 && <svg.BasketSmallSvg color={strokeColor} />}
      {version === 2 && <svg.BasketBigSvg />}
    </TouchableOpacity>
  );
};

export default ProductInCart;
