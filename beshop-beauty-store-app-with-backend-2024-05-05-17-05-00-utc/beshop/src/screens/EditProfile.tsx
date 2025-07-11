import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {VALIDATION_ENABLED} from '../config';
import {validation} from '../utils/validation';
import {utils} from '../utils';

const EditProfile: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const user = {userName, email, phoneNumber, address};

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid barStyle='dark-content' translucent={true} />
    );
  };

  const renderHeader = () => {
    return <components.Header title='Edit profile' goBack={true} />;
  };

  const renderUserInfo = () => {
    return (
      <custom.TouchableOpacity
        style={{
          alignSelf: 'center',
          borderWidth: 6,
          borderRadius: 90,
          borderColor: theme.colors.accent,
          marginBottom: 30,
        }}
        onPress={() => {
          navigation.navigate('Gravatar');
        }}
      >
        <components.Gravatar
          email='kristinwatson@mail.com'
          size={utils.responsive(30 * 2).width}
        />
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            borderWidth: 1,
            borderRadius: 90,
            borderColor: theme.colors.pastel,
          }}
        >
          <svg.CameraSvg />
        </View>
      </custom.TouchableOpacity>
    );
  };

  const renderImage = () => {
    return (
      <custom.Image
        source={require('../assets/png/02.png')}
        style={{
          width: theme.sizes.width - 40,
          position: 'absolute',
          aspectRatio: 335 / 459,
          zIndex: -1,
        }}
      />
    );
  };

  const renderInputFields = () => {
    return (
      <View style={{marginBottom: 20}}>
        <custom.InputField
          value={userName}
          loading={loading}
          placeholder='Enter your name'
          onChangeText={(text) => setUserName(text)}
        />
        <custom.InputField
          value={email}
          loading={loading}
          placeholder='Enter your email'
          onChangeText={(text) => setEmail(text)}
        />
        <custom.InputField
          value={phoneNumber}
          loading={loading}
          placeholder='Enter your phone number'
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <custom.InputField
          value={address}
          loading={loading}
          placeholder='Enter your address'
          containerStyle={{marginBottom: 0}}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='save changes'
        onPress={() => {
          if (VALIDATION_ENABLED) {
            validation(user) ? navigation.goBack() : null;
          }
          if (!VALIDATION_ENABLED) {
            navigation.goBack();
          }
        }}
      />
    );
  };

  const renderContent = () => {
    const KAScrollViewStyle: object = {
      paddingVertical: 20,
      justifyContent: 'center',
      backgroundColor: theme.colors.pastel,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      marginTop: 10,
      flexGrow: 1,
    };

    return (
      <components.KAScrollView contentContainerStyle={{...KAScrollViewStyle}}>
        {renderUserInfo()}
        {renderImage()}
        {renderInputFields()}
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

export default EditProfile;
