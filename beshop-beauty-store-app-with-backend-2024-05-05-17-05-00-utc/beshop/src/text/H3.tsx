import {Text, TextStyle} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
};

const H3: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{
        color: theme.colors.mainColor,
        textTransform: 'capitalize',
        lineHeight: utils.responsiveFontSize(20) * 1.2,
        ...theme.fonts.H3,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H3;
