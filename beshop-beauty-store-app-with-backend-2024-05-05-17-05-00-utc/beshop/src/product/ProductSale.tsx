import React from 'react';
import {View, Text} from 'react-native';

import {utils} from '../utils';
import {theme} from '../constants';
import {ProductType} from '../types';

type Props = {item: ProductType; containerStyle?: object};

const ProductSale: React.FC<Props> = ({
  item,
  containerStyle,
}): JSX.Element | null => {
  if (item.old_price) {
    return (
      <View
        style={{
          backgroundColor: '#A3D2A2',
          alignSelf: 'flex-end',
          paddingHorizontal: 10,
          paddingVertical: 1,
          ...containerStyle,
        }}
      >
        <Text
          style={{
            ...theme.fonts.Lato_700Bold,
            fontSize: utils.responsiveFontSize(8),
            lineHeight: utils.responsiveFontSize(8) * 1.7,
            textTransform: 'uppercase',
            color: theme.colors.white,
          }}
        >
          Sale
        </Text>
      </View>
    );
  }

  return null;
};

export default ProductSale;
