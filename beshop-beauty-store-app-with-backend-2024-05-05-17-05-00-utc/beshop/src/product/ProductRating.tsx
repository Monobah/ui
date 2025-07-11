import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

import {utils} from '../utils';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {ProductType} from '../types';

type Props = {
  item: ProductType;
  style?: ViewStyle;
};

const ProductRating: React.FC<Props> = ({item, style}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', ...style}}>
      <svg.StarSvg />
      <Text
        style={{
          color: theme.colors.textColor,
          marginLeft: 4,
          fontSize: utils.responsiveFontSize(12),
          lineHeight: utils.responsiveFontSize(12) * 1.7,
          ...theme.fonts.Lato_400Regular,
        }}
      >
        {item.rating.toFixed(1)}
      </Text>
    </View>
  );
};

export default ProductRating;
