import React from 'react';
import {View} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';

const SignUpAccountCreated: React.FC = () => {
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
      <View style={{alignSelf: 'center', marginBottom: 15}}>
        <svg.LogoSvg version={2} />
      </View>
    );
  };

  const renderImage = () => {
    return (
      <custom.Image
        source={{uri: 'https://george-fx.github.io/beshop/status/01.png'}}
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
        <text.H2 style={{textAlign: 'center', marginBottom: 14}}>
          Account Created!
        </text.H2>
        <text.T16 style={{textAlign: 'center', marginBottom: 30}}>
          Your account had beed created{'\n'}successfully.
        </text.T16>
      </View>
    );
  };

  const renderButon = () => {
    return (
      <components.Button
        title='shop now'
        onPress={() => {
          navigation.navigate('TabNavigator');
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
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

export default SignUpAccountCreated;
