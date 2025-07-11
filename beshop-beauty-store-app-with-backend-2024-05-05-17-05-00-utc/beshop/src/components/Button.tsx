import React from 'react';
import {Text, View, ActivityIndicator, StyleProp} from 'react-native';

import {custom} from '../custom';
import {theme} from '../constants';

type Props = {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  transparent?: boolean;
  containerStyle?: StyleProp<any>;
  buttonStyle?: StyleProp<any>;
  textStyle?: StyleProp<any>;
};

const Button: React.FC<Props> = ({
  title,
  onPress,
  textStyle,
  buttonStyle,
  containerStyle,
  loading = false,
  disabled = false,
  transparent = false,
}): JSX.Element => {
  return (
    <View style={containerStyle}>
      <custom.TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          borderWidth: transparent ? 1 : 0,
          backgroundColor: theme.colors.mainColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          ...buttonStyle,
        }}
        onPress={onPress}
        disabled={disabled}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {loading && (
            <ActivityIndicator
              color={transparent ? theme.colors.mainColor : theme.colors.white}
              size='small'
            />
          )}
          {!loading && (
            <Text
              style={{
                color: theme.colors.white,
                textTransform: 'uppercase',
                fontSize: 14,
                ...theme.fonts.Lato_400Regular,
                ...textStyle,
              }}
            >
              {title}
            </Text>
          )}
        </View>
      </custom.TouchableOpacity>
    </View>
  );
};

export default Button;
