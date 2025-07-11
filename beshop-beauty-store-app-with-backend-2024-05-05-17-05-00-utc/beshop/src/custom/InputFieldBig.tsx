import React from 'react';
import {View, TextInput, ViewStyle} from 'react-native';

import {utils} from '../utils';
import {theme} from '../constants';

type Props = {
  containerStyle?: ViewStyle;
};

const InputFieldBig: React.FC<Props> = ({containerStyle}): JSX.Element => {
  return (
    <View
      style={{
        width: theme.sizes.width - 40,
        height: 130,
        borderWidth: 1,
        borderColor: theme.colors.pastel,
        paddingVertical: 12,
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          paddingHorizontal: 30,
          color: theme.colors.mainColor,
          ...theme.fonts.textStyle_14,
          lineHeight: utils.responsiveFontSize(14) * 1.5,
        }}
        multiline={true}
        textAlignVertical='top'
        placeholderTextColor='#999999'
        placeholder='Enter your comment'
      />
    </View>
  );
};

export default InputFieldBig;
