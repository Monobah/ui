import React from 'react';
import {Text, TextStyle} from 'react-native';

import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  style?: TextStyle;
  numberOfLines?: number;
  children: React.ReactNode;
};

const H2: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{
        color: theme.colors.mainColor,
        lineHeight: utils.responsiveFontSize(22) * 1.2,
        ...theme.fonts.H2,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H2;
