import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  icon: JSX.Element;
  title: string;
  onPress?: () => void;
  containerStyle?: object;
};

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';

const ProfileCategory: React.FC<Props> = ({
  icon,
  title,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        // borderColor: theme.colors.lightBlue,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#FAF9FF',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#EEEEEE',
        }}
      >
        {icon}
      </View>

      <text.H5 style={{marginRight: 'auto', marginLeft: 14}}>{title}</text.H5>
      {onPress && title !== 'Sign out' && <svg.RightArrowSvg />}
    </TouchableOpacity>
  );
};

export default ProfileCategory;
