import React from 'react';
import {View} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';

const ForgotPasswordSentEmail: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBarIOS = () => {
    return (
      <custom.StatusBarIOS
        containerStyle={{backgroundColor: theme.colors.pastel}}
      />
    );
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid barStyle='dark-content' translucent={true} />
    );
  };

  const renderLogo = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          marginBottom: 15,
        }}
      >
        <svg.LogoSvg version={2} />
      </View>
    );
  };

  const renderImage = () => {
    return (
      <custom.Image
        source={{uri: 'https://george-fx.github.io/beshop/status/02.png'}}
        style={{
          width: theme.sizes.width - 40,
          aspectRatio: 347 / 319,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
    );
  };

  const renderDescription = () => {
    return (
      <View>
        <text.H2
          style={{
            textAlign: 'center',
            marginBottom: 14,
            textTransform: 'capitalize',
          }}
        >
          Your password has{'\n'}been reset!
        </text.H2>
        <text.T16 style={{textAlign: 'center', marginBottom: 30}}>
          Qui ex aute ipsum duis. Incididunt{'\n'}adipisicing voluptate laborum
        </text.T16>
      </View>
    );
  };

  const renderButon = () => {
    return (
      <components.Button
        title='done'
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: utils.responsive(2).height,
          paddingBottom: 20,
        }}
      >
        {renderLogo()}
        {renderImage()}
        {renderDescription()}
        {renderButon()}
      </custom.ScrollView>
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator backgroundColor={theme.colors.pastel} />;
  };

  return (
    <custom.SmartView style={{backgroundColor: theme.colors.pastel}}>
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default ForgotPasswordSentEmail;
