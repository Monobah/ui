import {View, Text} from 'react-native';
import React from 'react';

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';

type Props = {
  leftBlock: string;
  rightBlock?: string | JSX.Element;
  onPress?: boolean;
};

const CheckoutHeading: React.FC<Props> = ({leftBlock, rightBlock, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: leftBlock === 'My order' ? 20 : 12,
        borderBottomColor: theme.colors.mainColor,
      }}
    >
      {leftBlock && <text.H6>{leftBlock}</text.H6>}
      {onPress && !rightBlock && <svg.RightArrowSvg />}
      {rightBlock && !onPress && <text.H6>{rightBlock}</text.H6>}
    </View>
  );
};

export default CheckoutHeading;
