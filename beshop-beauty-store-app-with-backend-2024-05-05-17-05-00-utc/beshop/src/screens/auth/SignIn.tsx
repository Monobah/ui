import {View} from 'react-native';
import React, {useState} from 'react';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {actions} from '../../store/actions';
import {components} from '../../components';
import {VALIDATION_ENABLED} from '../../config';
import {validation} from '../../utils/validation';

const SignIn: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();
  const homeIndicatorHeight = utils.homeIndicatorHeight();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const user = {email, password};

  const setUser = () => {
    dispatch(actions.setUser(user));
  };

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
      <text.H1 style={{textAlign: 'center', marginBottom: 14}}>
        Welcome Back!
      </text.H1>
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
          value={email}
          loading={loading}
          placeholder='kristinwatson@mail.com'
          onChangeText={(text) => setEmail(text)}
          checkIcon={!email.match(/\S+@\S+\.\S+/) ? false : true}
        />
        <custom.InputField
          value={password}
          loading={loading}
          placeholder='••••••••'
          secureTextEntry={secureTextEntry}
          containerStyle={{marginBottom: 0}}
          setSecureTextEntry={setSecureTextEntry}
          onChangeText={(text) => setPassword(text)}
          eyeOffIcon={password.length > 0 ? true : false}
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

  const renderAdditionalButtons = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <custom.TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderWidth: 1,
              borderColor: '#EEEEEE',
              backgroundColor: theme.colors.white,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {rememberMe && <svg.RememberCheckSvg />}
          </View>
          <text.T16 style={{color: theme.colors.textColor}}>
            Remember me
          </text.T16>
        </custom.TouchableOpacity>

        <custom.TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <text.T16 style={{color: theme.colors.accent}}>
            {' '}
            Lost your password?
          </text.T16>
        </custom.TouchableOpacity>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Sign in'
        containerStyle={{marginBottom: 20}}
        onPress={() => {
          if (VALIDATION_ENABLED) {
            validation(user) ? setUser() : null;
          }
          if (!VALIDATION_ENABLED) {
            setUser();
          }
        }}
      />
    );
  };

  const renderIfYouDontHaveAnAccount = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <text.T16>No account?</text.T16>
        <custom.TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <text.T16 style={{color: theme.colors.accent}}>
            {' '}
            Register now
          </text.T16>
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
        {renderAdditionalButtons()}
        {renderButton()}
        {renderIfYouDontHaveAnAccount()}
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

export default SignIn;
