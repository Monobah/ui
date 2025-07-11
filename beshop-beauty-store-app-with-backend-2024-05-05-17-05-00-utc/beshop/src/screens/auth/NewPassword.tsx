import React, {useState} from 'react';
import {View} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';
import {validation} from '../../utils/validation';

const NewPassword: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid barStyle='dark-content' translucent={true} />
    );
  };

  const renderHeader = () => {
    return (
      <components.Header
        title='Reset password'
        style={{marginBottom: 10}}
        goBack={true}
      />
    );
  };

  const renderDescription = () => {
    return (
      <text.T16 style={{marginBottom: 30}}>
        Enter new password and confirm.
      </text.T16>
    );
  };

  const renderInputField = () => {
    return (
      <View>
        <custom.InputField
          value={password}
          eyeOffIcon={true}
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder='Enter your password'
          containerStyle={{marginBottom: 10}}
        />
        <custom.InputField
          eyeOffIcon={true}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder='Confirm your password'
          containerStyle={{marginBottom: 20}}
        />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='change password'
        // onPress={() => {
        //   validation({password, confirmPassword})
        //     ? navigation.navigate('SignUpAccountCreated')
        //     : null;
        // }}
        onPress={() => {
          navigation.navigate('ForgotPasswordSentEmail');
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 30,
          backgroundColor: theme.colors.pastel,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          flexGrow: 0,
        }}
      >
        <custom.Image
          source={require('../../assets/png/03.png')}
          style={{
            width: theme.sizes.width - 40,
            position: 'absolute',
            aspectRatio: 335 / 271,
            bottom: 0,
          }}
          // resizeMode='cover'
        />
        {renderDescription()}
        {renderInputField()}
        {renderButton()}
      </components.KAScrollView>
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default NewPassword;
