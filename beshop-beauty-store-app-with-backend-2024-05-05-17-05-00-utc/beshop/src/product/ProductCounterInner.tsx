import React from 'react';
import {View, Text} from 'react-native';

import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';
import {actions} from '../store/actions';

type Props = {item: ProductType};

const ProductCounterInner: React.FC<Props> = ({item}) => {
  const dispatch = hooks.useDispatch();

  const quantity = utils.quantityInCart(item);

  return (
    <View
      style={{
        height: 40,
        width: 110,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: '#FAF9FF',
      }}
    >
      <custom.TouchableOpacity
        onPress={() => {
          dispatch(actions.removeFromCart(item));
        }}
        style={{paddingHorizontal: 16}}
      >
        <svg.MinusSvg />
      </custom.TouchableOpacity>
      <Text
        style={{
          ...theme.fonts.Lato_400Regular,
          fontSize: 14,
          color: theme.colors.textColor,
        }}
      >
        {quantity}
      </Text>

      <custom.TouchableOpacity
        onPress={() => {
          dispatch(
            actions.addToCart({
              ...item,
              // color: selectedColor,
            }),
          );
        }}
        style={{paddingHorizontal: 16}}
      >
        <svg.PlusSvg />
      </custom.TouchableOpacity>
    </View>
  );
};

export default ProductCounterInner;
