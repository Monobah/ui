import React from 'react';
import {View, ViewStyle, Platform, StatusBar} from 'react-native';

import {theme} from '../constants';
import {statusBarHeight} from '../utils';

type Props = {
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  barStyle?: 'light-content' | 'dark-content';
};

const StatusBarIOS: React.FC<Props> = ({
  backgroundColor,
  barStyle,
  containerStyle,
}) => {
  const height = statusBarHeight();

  if (Platform.OS === 'ios') {
    return (
      <View
        style={{
          height: height,
          backgroundColor: backgroundColor ?? theme.colors.white,
          ...containerStyle,
        }}
      >
        <StatusBar barStyle={barStyle ?? 'dark-content'} />
      </View>
    );
  }

  return null;
};

export default React.memo(StatusBarIOS);
