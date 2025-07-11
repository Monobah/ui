import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {theme} from '../constants';
import {svg} from '../assets/svg';

type Props = {
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  value?: string;
  check?: boolean;
  label?: string;
  loading?: boolean;
  setSecureTextEntry?: (value: boolean) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  blurOnSubmit?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  eyeOffIcon?: boolean;
  checkIcon?: boolean | (() => void);
  icon?: JSX.Element;
  innerRef?: any;
  editable?: boolean;
  maxLength?: number;
  onBlur?: () => void;
};

const InputField: React.FC<Props> = ({
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  setSecureTextEntry,
  autoCapitalize = 'none',
  eyeOffIcon = false,
  onChangeText,
  blurOnSubmit,
  label,
  value,
  icon,
  editable = true,
  loading,
  onBlur,
  innerRef,
  maxLength,
}): JSX.Element | null => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<TextInput>({focus: () => {}} as TextInput);

  if (loading) {
    ref.current.blur();
  }

  return (
    <View
      style={{
        height: 60,
        borderColor: theme.colors.pastel,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        marginBottom: 10,
        ...containerStyle,
      }}
    >
      {label && (
        <View
          style={{
            position: 'absolute',
            top: -11,
            left: 20,
            paddingHorizontal: 10,
            borderRadius: 10,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              // ...theme.fonts.Mulish_SemiBold,
              fontSize: 12,
              textTransform: 'uppercase',
              color: theme.colors.textColor,
              lineHeight: 12 * 1.7,
            }}
          >
            {label}
          </Text>
        </View>
      )}
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: RFValue(15, theme.sizes.height),
          marginLeft: 20,
          marginRight: eyeOffIcon ? 0 : checkIcon ? 0 : 30,
          color: theme.colors.mainColor,
          // ...theme.fonts.Mulish_Regular,
        }}
        autoCapitalize={autoCapitalize} // none, sentences, words, characters
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#A7AFB7'}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        ref={ref}
        blurOnSubmit={blurOnSubmit}
        onBlur={onBlur}
        maxLength={maxLength}
        editable={editable} // disable input
      />

      {checkIcon && (
        <View style={{paddingHorizontal: 20}}>
          <svg.InputCheckSvg />
        </View>
      )}
      {eyeOffIcon && (
        <TouchableOpacity
          style={{paddingHorizontal: 20}}
          onPress={() => {
            setSecureTextEntry && setSecureTextEntry(!secureTextEntry);
          }}
        >
          <svg.EyeOffSvg />
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
