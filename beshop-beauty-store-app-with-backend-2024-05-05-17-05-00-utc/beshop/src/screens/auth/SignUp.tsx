import {View} from 'react-native';
import React, {useState} from 'react';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';
import {validation} from '../../utils/validation';

const SignUp: React.FC = () => {
  const navigation = hooks.useNavigation();
  const homeIndicatorHeight = utils.homeIndicatorHeight();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const user = {userName, email, password};

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
        title='Sign in'
        style={{marginBottom: 10}}
        goBack={true}
      />
    );
  };

  const renderTitles = () => {
    return (
      <text.H1 style={{textAlign: 'center', marginBottom: 14}}>Sign up</text.H1>
    );
  };

  const renderDescription = () => {
    return (
      <text.T16 style={{textAlign: 'center', marginBottom: 30}}>
        Use social networks or your email
      </text.T16>
    );
  };

  const renderInputFields = () => {
    return (
      <View style={{marginBottom: 20}}>
        <custom.InputField
          value={userName}
          loading={loading}
          placeholder='Kristin Watson'
          onChangeText={(text) => setUserName(text)}
        />
        <custom.InputField
          value={email}
          loading={loading}
          placeholder='Enter your email'
          onChangeText={(text) => setEmail(text)}
        />
        <custom.InputField
          value={password}
          eyeOffIcon={true}
          loading={loading}
          placeholder='Enter your password'
          onChangeText={(text) => setPassword(text)}
          checkIcon={!email.match(/\S+@\S+\.\S+/) ? false : true}
        />
        <custom.InputField
          value={confirmPassword}
          eyeOffIcon={true}
          loading={loading}
          placeholder='Confirm your password'
          secureTextEntry={secureTextEntry}
          containerStyle={{marginBottom: 0}}
          setSecureTextEntry={setSecureTextEntry}
          onChangeText={(text) => setConfirmPassword(text)}
          checkIcon={!email.match(/\S+@\S+\.\S+/) ? false : true}
        />
      </View>
    );
  };

  const renderSocial = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 30,
        }}
      >
        <custom.TouchableOpacity style={{paddingHorizontal: 5}}>
          <svg.FacebookSvg />
        </custom.TouchableOpacity>
        <custom.TouchableOpacity style={{paddingHorizontal: 5}}>
          <svg.TwitterSvg />
        </custom.TouchableOpacity>
        <custom.TouchableOpacity style={{paddingHorizontal: 5}}>
          <svg.GoogleSvg />
        </custom.TouchableOpacity>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Sign up'
        containerStyle={{marginBottom: 20}}
        // onPress={() => {
        //   validation(user)
        //     ? navigation.navigate('VerifyYourPhoneNumber')
        //     : null;
        // }}
        onPress={() => {
          navigation.navigate('VerifyYourPhoneNumber');
        }}
      />
    );
  };

  const renderIfAlreadyHaveAnAccount = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <text.T16>Already have an account?</text.T16>
        <custom.TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <text.T16 style={{color: theme.colors.accent}}> Sign in.</text.T16>
        </custom.TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          paddingVertical: 20,
          justifyContent: 'center',
          backgroundColor: theme.colors.pastel,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          flexGrow: 1,
        }}
      >
        <custom.Image
          source={require('../../assets/png/02.png')}
          style={{
            width: theme.sizes.width - 40,
            position: 'absolute',
            aspectRatio: 335 / 459,
          }}
          // resizeMode='cover'
        />
        {renderTitles()}
        {renderDescription()}
        {renderSocial()}
        {renderInputFields()}
        {renderButton()}
        {renderIfAlreadyHaveAnAccount()}
      </components.KAScrollView>
    );
  };

  const renderHomeIndicator = () => {
    if (homeIndicatorHeight > 0) {
      return <custom.HomeIndicator />;
    }

    if (homeIndicatorHeight === 0) {
      return <View style={{height: utils.responsive(4).height}} />;
    }
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

export default SignUp;
