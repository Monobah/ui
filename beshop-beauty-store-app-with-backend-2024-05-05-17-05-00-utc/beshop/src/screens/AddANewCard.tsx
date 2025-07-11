import React from 'react';
import {View} from 'react-native';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const AddANewCard: React.FC = (): JSX.Element => {
  const navigation = hooks.useNavigation();

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid barStyle='dark-content' translucent={true} />
    );
  };

  const renderHeader = () => {
    return <components.Header title='Add a new card' goBack={true} />;
  };

  const renderImageBackground = () => {
    return (
      <custom.Image
        source={require('../assets/png/02.png')}
        style={{
          width: theme.sizes.width - 40,
          position: 'absolute',
          aspectRatio: 335 / 459,
        }}
        // resizeMode='cover'
      />
    );
  };

  const renderCard = () => {
    return (
      <custom.Image
        source={{
          uri: 'https://george-fx.github.io/beshop/cards/03.png',
        }}
        style={{
          width: theme.sizes.width - 80,
          aspectRatio: 279 / 170,
          marginBottom: 30,
        }}
      />
    );
  };

  const renderInputFields = () => {
    return (
      <View>
        <custom.InputField placeholder='Kristin Watson' />
        <custom.InputField placeholder='xxxx xxxx xxxx xxxx' />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <custom.InputField
            placeholder='MM/YY'
            containerStyle={{
              width: '48%',
              marginBottom: 0,
            }}
          />
          <custom.InputField
            placeholder='CVV'
            containerStyle={{
              width: '48%',
              marginBottom: 0,
            }}
          />
        </View>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='save card'
        onPress={() => navigation.navigate('PaymentMethod')}
      />
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          paddingVertical: 30,
          marginTop: 10,
          justifyContent: 'center',
          backgroundColor: theme.colors.pastel,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          // flexGrow: 1,
        }}
      >
        {renderImageBackground()}
        {renderCard()}
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

export default AddANewCard;
