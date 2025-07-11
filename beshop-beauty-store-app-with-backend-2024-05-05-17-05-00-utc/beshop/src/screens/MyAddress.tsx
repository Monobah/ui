import React from 'react';
import {View, Text} from 'react-native';

import {utils} from '../utils';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const addressess: {id: number; name: string; address: string}[] = [
  {
    id: 1,
    name: 'Home',
    address: '1234 Main St, San Francisco CA 94102',
  },
  {
    id: 2,
    name: 'Work',
    address: '1234 Main St, San Francisco CA 94102',
  },
  {
    id: 3,
    name: 'Other',
    address: '1234 Main St, San Francisco CA 94102',
  },
];

const MyAddress: React.FC = () => {
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
        title='My address'
        style={{marginBottom: 10}}
        goBack={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderAddressess = () => {
    return (
      <View style={{marginBottom: utils.responsive(12).height}}>
        {addressess.map((item, index, array) => {
          const last = index === array.length - 1;
          return (
            <components.AddressItem key={item.id} item={item} last={last} />
          );
        })}
      </View>
    );
  };

  const renderButton = () => {
    return (
      <custom.TouchableOpacity style={{alignSelf: 'center'}} onPress={() => {}}>
        <svg.AddANewAddressSvg />
      </custom.TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 20}}
      >
        {renderAddressess()}
        {renderButton()}
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

export default MyAddress;
