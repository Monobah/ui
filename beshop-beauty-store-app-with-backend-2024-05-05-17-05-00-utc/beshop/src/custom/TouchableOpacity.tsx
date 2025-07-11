import React from 'react';
import {
  Text,
  TouchableOpacity as TouchableOpacityRN,
  ViewStyle,
} from 'react-native';

type Props = {
  style?: ViewStyle;
  disabled?: boolean;
  onPress?: () => void;
  activeOpacity?: number;
  children: React.ReactNode;
};

const TouchableOpacity: React.FC<Props> = ({
  onPress,
  children,
  style,
  disabled,
  activeOpacity,
}) => {
  return (
    <TouchableOpacityRN
      onPress={onPress}
      style={style}
      disabled={disabled}
      activeOpacity={activeOpacity}
    >
      {children}
    </TouchableOpacityRN>
  );
};

export default TouchableOpacity;
