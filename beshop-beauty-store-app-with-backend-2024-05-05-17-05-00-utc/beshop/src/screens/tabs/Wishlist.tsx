import React from 'react';
import {Text} from 'react-native';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';

const Wishlist: React.FC = () => {
  const wishlist = hooks.useSelector((state) => state.wishlistSlice.list);

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
        title='Wishlist'
        basket={true}
        logo={true}
        style={{backgroundColor: theme.colors.pastel}}
      />
    );
  };

  const renderProducts = () => {
    if (wishlist.length > 0) {
      return (
        <custom.FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 20,
            flexGrow: 1,
            paddingBottom: 20,
            paddingTop: 17,
          }}
          renderItem={({item, index}) => {
            const lastItem = index === wishlist.length - 1;
            return (
              <components.WishlistItem
                key={index}
                item={item}
                lastItem={lastItem}
              />
            );
          }}
        />
      );
    }

    return null;
  };

  const renderEmptyWishlist = () => {
    if (wishlist.length === 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Text>Your wishlist is empty.</Text>
        </custom.ScrollView>
      );
    }

    return null;
  };

  const renderContent = () => {
    return (
      <React.Fragment>
        {renderProducts()}
        {renderEmptyWishlist()}
      </React.Fragment>
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

export default Wishlist;
