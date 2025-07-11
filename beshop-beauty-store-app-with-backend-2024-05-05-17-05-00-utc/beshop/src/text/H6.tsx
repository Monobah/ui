import {Text, TextStyle} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
};

const H5: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{
        color: theme.colors.mainColor,
        ...theme.fonts.H6,
        ...style,
        lineHeight: utils.responsiveFontSize(14) * 1.2,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H5;
