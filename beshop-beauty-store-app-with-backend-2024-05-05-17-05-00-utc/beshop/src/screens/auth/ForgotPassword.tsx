import React from 'react';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';
import {validation} from '../../utils/validation';

const ForgotPassword: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [email, setEmail] = React.useState<string>('');

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
        title='Forgot password'
        style={{marginBottom: 10}}
        goBack={true}
      />
    );
  };

  const renderDescription = () => {
    return (
      <text.T16 style={{marginBottom: 30}}>
        Please enter your email address. You will receive a link to create a new
        password via email.
      </text.T16>
    );
  };

  const renderInputField = () => {
    return (
      <custom.InputField
        value={email}
        onChangeText={setEmail}
        placeholder='Enter your email address'
        containerStyle={{marginBottom: 20}}
      />
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='send'
        // onPress={() => {
        //   validation({email}) ? navigation.navigate('NewPassword') : null;
        // }}
        onPress={() => {
          navigation.navigate('NewPassword');
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

export default ForgotPassword;
