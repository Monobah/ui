import {View} from 'react-native';
import React from 'react';

import {text} from '../text';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const status = 'shipping';

const TrackYourOrder = () => {
  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS backgroundColor={theme.colors.pastel} />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid
        barStyle='dark-content'
        translucent={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderHeader = () => {
    return (
      <components.Header
        title='Track your order'
        goBack={true}
        style={{
          backgroundColor: theme.colors.pastel,
        }}
      />
    );
  };

  const renderImage = () => {
    // 375 = 100%
    // 204 = how much we need to find out in % (204 * 100) / 375 = 54.4%
    // 100% - 54.4% = 45.6%
    return (
      <custom.Image
        source={{uri: 'https://george-fx.github.io/beshop/status/03.png'}}
        style={{
          width: utils.responsive(54.4).width,
          aspectRatio: 204.25 / 182,
          alignSelf: 'center',
          marginBottom: 20,
        }}
      />
    );
  };

  const renderDescription = () => {
    return (
      <View>
        <text.H3 style={{textAlign: 'center', marginBottom: 6}}>
          Your order:
        </text.H3>
        <text.T16 style={{textAlign: 'center', marginBottom: 20}}>
          #205479
        </text.T16>
      </View>
    );
  };

  const renderOrderStatus = () => {
    return (
      <View>
        <components.OrderStatus
          title='Order created'
          description='We have received your order'
          status={status}
          // pr
        />
        <components.OrderStatus
          title='Order confirmed'
          description='Your order has been confirmed'
          status={status}
        />
        <components.OrderStatus
          title='Order confirmed'
          description='Your order has been confirmed'
          status={status}
        />
        <components.OrderStatus
          title='Order confirmed'
          description='Your order has been confirmed'
          status={status}
        />
        <components.OrderStatus
          title='Receiving'
          description='Estimated for Jul 15, 2022'
          status={'receiving'}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{paddingTop: 20, paddingHorizontal: 40}}
      >
        {renderImage()}
        {renderDescription()}
        {renderOrderStatus()}
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
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default TrackYourOrder;
