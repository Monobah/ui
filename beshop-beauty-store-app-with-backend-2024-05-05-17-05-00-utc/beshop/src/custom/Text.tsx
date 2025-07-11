import {Text as RNText, TextProps, TextStyle} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const Text: React.FC<TextProps> = ({style, children, numberOfLines}) => {
  return (
    <RNText
      style={{color: theme.colors.mainColor, ...(style as TextStyle)}}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

export default Text;
