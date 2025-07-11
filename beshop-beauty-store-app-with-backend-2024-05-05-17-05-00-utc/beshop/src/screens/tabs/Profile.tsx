import React from 'react';
import {Text, View} from 'react-native';

import {text} from '../../text';
import {utils} from '../../utils';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {actions} from '../../store/actions';
import {components} from '../../components';

const Profile: React.FC = () => {
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
        logo={true}
        basket={true}
        title='My profile'
        style={{backgroundColor: theme.colors.pastel}}
      />
    );
  };

  const renderUserInfo = () => {
    return (
      <View>
        <custom.TouchableOpacity
          style={{
            alignSelf: 'center',
            borderWidth: 6,
            borderRadius: 90,
            borderColor: theme.colors.accent,
            marginBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
        >
          <components.Gravatar email='kristinwatson@mail.com' size={180} />
          <View
            style={{
              position: 'absolute',
              right: -14,
              bottom: -6,
              borderWidth: 1,
              borderRadius: 90,
              borderColor: theme.colors.pastel,
            }}
          >
            <svg.EditSvg />
          </View>
        </custom.TouchableOpacity>
        <text.H3
          style={{
            color: theme.colors.mainColor,
            textAlign: 'center',
            marginBottom: 4,
          }}
        >
          Kristin Watson
        </text.H3>
        <text.T14
          style={{
            color: theme.colors.textColor,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          kristinwatson@mail.com
        </text.T14>
      </View>
    );
  };

  const renderCategories = () => {
    return (
      <View>
        <components.ProfileCategory
          onPress={() => {
            navigation.navigate('OrderHistory');
          }}
          title='Order history'
          icon={<svg.CalendarSvg />}
        />
        <components.ProfileCategory
          onPress={() => {
            navigation.navigate('PaymentMethod');
          }}
          title='Payment method'
          icon={<svg.CreditCardSvg />}
        />
        <components.ProfileCategory
          onPress={() => {
            navigation.navigate('MyAddress');
          }}
          title='My address'
          icon={<svg.MapPinSvg />}
        />
        <components.ProfileCategory
          onPress={() => {
            navigation.navigate('MyPromocodes');
          }}
          title='My promocodes'
          icon={<svg.GiftSvg />}
        />
        <components.ProfileCategory
          onPress={() => {
            navigation.navigate('TrackYourOrder');
          }}
          title='Track my order'
          icon={<svg.TruckSvg />}
        />
        <components.ProfileCategory
          onPress={() => {
            navigation.navigate('FAQ');
          }}
          title='FAQ'
          icon={<svg.HelpCircleSvg />}
        />
        <components.ProfileCategory
          onPress={() => {
            dispatch(actions.logOut());
          }}
          title='Sign out'
          icon={<svg.LogOutSvg />}
          containerStyle={{marginBottom: 0}}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{
          paddingTop: utils.responsive(3).height,
          paddingBottom: utils.responsive(3).height,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderUserInfo()}
        {renderCategories()}
      </custom.ScrollView>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
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
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Profile;
