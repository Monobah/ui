import {View, TouchableOpacity, Text, ViewStyle} from 'react-native';
import React from 'react';

import {svg} from '../assets/svg';
import {text} from '../text';
import {theme} from '../constants';

type Props = {
  title: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
};

const BlockHeading: React.FC<Props> = ({title, onPress, containerStyle}) => {
  console.log('BlockHeading');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        paddingBottom: 10,
        ...containerStyle,
      }}
    >
      <text.H3>{title}</text.H3>
      {onPress && (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              ...theme.fonts.textStyle_16,
              fontSize: 16,
              color: theme.colors.accent,
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(BlockHeading);
