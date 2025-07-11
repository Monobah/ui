import React from 'react';
import {TextStyle} from 'react-native';

import {text} from '../text';
import {theme} from '../constants';
import {ProductType} from '../types';

type Props = {item: ProductType; style?: TextStyle};

const ProductName: React.FC<Props> = ({item, style}) => {
  return (
    <text.H6
      style={{
        color: theme.colors.mainColor,
        ...style,
      }}
      numberOfLines={1}
    >
      {item.name}
    </text.H6>
  );
};

export default ProductName;
