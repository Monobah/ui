import {View, Text} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';
import {actions} from '../store/actions';

type Props = {item: ProductType};

const ProductCounter: React.FC<Props> = ({item}) => {
  const dispatch = hooks.useDispatch();

  const quantity = utils.quantityInCart(item);

  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <custom.TouchableOpacity
        onPress={() => {
          dispatch(actions.addToCart(item));
        }}
      >
        <svg.CounterPlusSvg />
      </custom.TouchableOpacity>
      <Text
        style={{
          ...theme.fonts.Lato_400Regular,
          fontSize: utils.responsiveFontSize(10),
          color: theme.colors.textColor,
        }}
      >
        {quantity}
      </Text>
      <custom.TouchableOpacity
        onPress={() => {
          dispatch(actions.removeFromCart(item));
        }}
      >
        <svg.CounterMinusSvg />
      </custom.TouchableOpacity>
    </View>
  );
};

export default ProductCounter;
