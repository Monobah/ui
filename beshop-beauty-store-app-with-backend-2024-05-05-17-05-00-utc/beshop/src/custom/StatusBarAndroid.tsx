import React from 'react';
import {StatusBar as StatusBarRN, Platform, View} from 'react-native';

import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  translucent?: boolean;
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
};

const StatusBarAndroid: React.FC<Props> = ({
  backgroundColor,
  barStyle,
  translucent,
}) => {
  if (Platform.OS === 'android') {
    return (
      <View
        style={{
          height: utils.statusBarHeight(),
          backgroundColor: backgroundColor ?? theme.colors.white,
        }}
      >
        <StatusBarRN
          translucent={translucent ?? false}
          barStyle={barStyle ?? 'light-content'}
          backgroundColor={backgroundColor ?? theme.colors.transparent}
        />
      </View>
    );
  }

  return null;
};

export default React.memo(StatusBarAndroid);
