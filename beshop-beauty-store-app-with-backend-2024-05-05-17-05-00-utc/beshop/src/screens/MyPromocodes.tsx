import {View, Text} from 'react-native';
import React, {useState} from 'react';

import {text} from '../text';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {utils} from '../utils';

const MyPromocodes: React.FC = () => {
  const {data, error, isLoading} = hooks.useGetPromocodesQuery();

  let promocodes = data instanceof Array ? data : [];
  // promocodes = [];

  const [usedOrCurrent, setUsedOrCurrent] = useState<'used' | 'current'>(
    'current',
  );

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
        title='My promocodes'
        goBack={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderCurrentOrUsed = () => {
    if (data && promocodes.length > 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 20,
          }}
        >
          <custom.TouchableOpacity
            style={{
              width: theme.sizes.width / 2 - 20 - 1.5,
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor:
                usedOrCurrent === 'current'
                  ? theme.colors.mainColor
                  : `${theme.colors.mainColor}50`,
            }}
            onPress={() => {
              setUsedOrCurrent('current');
            }}
          >
            <text.H4>Current</text.H4>
          </custom.TouchableOpacity>
          <custom.TouchableOpacity
            style={{
              width: theme.sizes.width / 2 - 20 - 1.5,
              paddingBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor:
                usedOrCurrent === 'used'
                  ? theme.colors.mainColor
                  : `${theme.colors.mainColor}50`,
            }}
            onPress={() => {
              setUsedOrCurrent('used');
            }}
          >
            <text.H4>Used</text.H4>
          </custom.TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderPlusButton = () => {
    return (
      <custom.TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: utils.responsive(8).height,
        }}
      >
        <svg.AddANewPromocodeSvg />
      </custom.TouchableOpacity>
    );
  };

  const renderPromocodes = () => {
    if (promocodes.length > 0) {
      return (
        <custom.FlatList
          numColumns={2}
          data={promocodes}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{paddingHorizontal: 20}}
          ListFooterComponent={() => {
            return renderPlusButton();
          }}
          renderItem={({item}) => {
            return <components.PromocodeItem item={item} />;
          }}
        />
      );
    }
  };

  const renderEmpty = () => {
    if (promocodes.length === 0) {
      return (
        <components.KAScrollView
          contentContainerStyle={{
            paddingTop: 28,
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          <custom.Image
            source={{
              uri: 'https://george-fx.github.io/beshop/status/05.png',
            }}
            style={{
              width: theme.sizes.width - 40,
              aspectRatio: 347 / 319,
              alignSelf: 'center',
              marginBottom: 30,
            }}
          />
          <text.H2
            style={{
              textAlign: 'center',
              textTransform: 'capitalize',
              marginBottom: 14,
            }}
          >
            Your don’t have{'\n'}promocodes yet!
          </text.H2>
          <text.T16
            style={{
              textAlign: 'center',
              marginBottom: 30,
            }}
          >
            Qui ex aute ipsum duis. Incididunt{'\n'}adipisicing voluptate
            laborum
          </text.T16>
          <custom.InputField
            placeholder='Enter a promocode'
            containerStyle={{marginBottom: 20}}
          />
          <components.Button title='Add a  promocode' />
        </components.KAScrollView>
      );
    }

    return null;
  };

  const renderContent = () => {
    if (isLoading) {
      return <components.Loader />;
    }

    return (
      <React.Fragment>
        {renderPromocodes()}
        {renderEmpty()}
      </React.Fragment>
    );
  };

  const renderHomeIndicator = () => {
    return (
      <custom.HomeIndicator
        backgroundColor={
          promocodes.length > 0 ? theme.colors.white : theme.colors.pastel
        }
      />
    );
  };

  return (
    <custom.SmartView
      style={{
        backgroundColor:
          promocodes.length > 0 ? theme.colors.white : theme.colors.pastel,
      }}
    >
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderHeader()}
      {renderCurrentOrUsed()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default MyPromocodes;
