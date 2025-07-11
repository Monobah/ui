import React from 'react';
import {View} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';

const OrderFailed: React.FC = () => {
  const dispatch = hooks.useDispatch();
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

  const renderImage = () => {
    return (
      <custom.Image
        source={{uri: 'https://george-fx.github.io/beshop/status/07.png'}}
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
          Sorry! Your order has {'\n'} failed!
        </text.H2>
        <text.T16 style={{textAlign: 'center', marginBottom: 30}}>
          Something went wrong. Please try again {'\n'} to contimue your order.
        </text.T16>
      </View>
    );
  };

  const renderButon = () => {
    return (
      <React.Fragment>
        <components.Button
          title='try again'
          onPress={() => {
            dispatch(actions.setScreen('Home'));
            navigation.navigate('TabNavigator');
          }}
          containerStyle={{marginBottom: 10}}
        />
        <components.Button
          title='go to my profile'
          buttonStyle={{
            backgroundColor: '#FAF9FF',
            borderWidth: 1,
            borderColor: '#EEEEEE',
          }}
          textStyle={{color: theme.colors.mainColor}}
          onPress={() => {
            dispatch(actions.setScreen('Profile'));
            navigation.navigate('TabNavigator');
          }}
        />
      </React.Fragment>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: utils.responsive(8).height,
          paddingBottom: 20,
        }}
      >
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

export default OrderFailed;
