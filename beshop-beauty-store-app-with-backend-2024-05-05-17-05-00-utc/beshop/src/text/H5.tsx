import {Text} from 'react-native';
import React from 'react';

import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  children: React.ReactNode;
  style?: object;
  numberOfLines?: number;
};

const H5: React.FC<Props> = ({children, style, numberOfLines}): JSX.Element => {
  return (
    <Text
      style={{
        color: theme.colors.mainColor,
        lineHeight: utils.responsiveFontSize(16) * 1.2,
        ...theme.fonts.H5,
        ...style,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default H5;
