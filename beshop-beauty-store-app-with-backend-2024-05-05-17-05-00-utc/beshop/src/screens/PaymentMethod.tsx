import React from 'react';
import {View, ViewStyle} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const cards: {id: number; image: string}[] = [
  {
    id: 1,
    image: 'https://george-fx.github.io/beshop/cards/01.png',
  },
  {
    id: 2,
    image: 'https://george-fx.github.io/beshop/cards/02.png',
  },
  {
    id: 3,
    image: 'https://george-fx.github.io/beshop/cards/03.png',
  },
];

const PaymentMethod: React.FC = () => {
  const navigation = hooks.useNavigation();

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
        title='Payment method'
        goBack={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderCards = () => {
    // 375 === 100%
    // 279 === x % => x = 279 * 100 / 375 = 74.4%
    return (
      <View style={{marginBottom: 30}}>
        <View
          style={{
            borderBottomWidth: 2,
            marginHorizontal: 20,
            marginBottom: 17,
          }}
        >
          <text.H3 style={{paddingBottom: 7}}>Cards</text.H3>
        </View>
        <custom.ScrollView
          contentContainerStyle={{paddingLeft: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {cards.map((item, index: number, array) => {
            const last = index === array.length - 1;
            return (
              <custom.TouchableOpacity key={item.id}>
                <custom.Image
                  source={{uri: item.image}}
                  style={{
                    width: utils.responsive(74.4).width,
                    aspectRatio: 279 / 170,
                    marginRight: last ? 20 : 14,
                  }}
                  imageStyle={{borderRadius: 10}}
                />
              </custom.TouchableOpacity>
            );
          })}
        </custom.ScrollView>
      </View>
    );
  };

  const renderPaymentMethods = () => {
    const blockStyle: ViewStyle = {
      borderWidth: 1,
      borderColor: '#EEEEEE',
      height: 60,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    };

    return (
      <View
        style={{marginHorizontal: 20, marginBottom: utils.responsive(9).height}}
      >
        <custom.TouchableOpacity style={{...blockStyle, marginBottom: 8}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <text.H5 style={{marginRight: 8}}>Apple Pay</text.H5>
            <svg.CheckSvg />
          </View>
          <svg.EditPaymentSvg />
        </custom.TouchableOpacity>
        <custom.TouchableOpacity style={{...blockStyle, marginBottom: 8}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <text.H5 style={{marginRight: 8}}>Pay Pal</text.H5>
            <svg.CheckSvg />
          </View>
          <svg.EditPaymentSvg />
        </custom.TouchableOpacity>
        <custom.TouchableOpacity style={{...blockStyle}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <text.H5 style={{marginRight: 8}}>Payoneer</text.H5>
          </View>
          <svg.PlusPaymentSvg />
        </custom.TouchableOpacity>
      </View>
    );
  };

  const renderAddANewCard = () => {
    return (
      <custom.TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => {
          navigation.navigate('AddANewCard');
        }}
      >
        <svg.AddANewCardSvg />
      </custom.TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView contentContainerStyle={{paddingVertical: 20}}>
        {renderCards()}
        {renderPaymentMethods()}
        {renderAddANewCard()}
      </custom.ScrollView>
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

export default PaymentMethod;
