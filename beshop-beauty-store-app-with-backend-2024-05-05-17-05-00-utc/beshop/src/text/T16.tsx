import {Text, TextStyle} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
};

const T16: React.FC<Props> = ({children, style, numberOfLines}) => {
  return (
    <Text
      style={{
        ...theme.fonts.textStyle_16,
        color: theme.colors.textColor,
        lineHeight: utils.responsiveFontSize(16) * 1.7,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default T16;
