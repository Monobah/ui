import React, {useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  ScrollView,
  RefreshControl,
  FlatList,
  Button,
} from 'react-native';

import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {actions} from '../../store/actions';
import {components} from '../../components';

const Home: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = hooks.useGetProductsQuery();

  const {
    data: bannersData,
    error: bannersError,
    isLoading: bannersLoading,
  } = hooks.useGetBannersQuery();

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = hooks.useGetCategoriesQuery();

  const products = productsData instanceof Array ? productsData : [];
  const featured = products?.filter((e) => e.is_featured) ?? [];
  const bestSellers = products?.filter((e) => e.is_bestseller) ?? [];
  const banners = bannersData instanceof Array ? bannersData : [];
  const categories = categoriesData instanceof Array ? categoriesData : [];

  const refreshControl = hooks.useRefreshMutation();
  const [triggerMutation, {data, isLoading}] = refreshControl;

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
        logo={true}
        basket={true}
        style={{backgroundColor: theme.colors.pastel}}
      />
    );
  };

  const renderCategories = () => {
    return (
      <custom.ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          marginVertical: 20,
        }}
        style={{flexGrow: 0}}
      >
        {categories?.map((item, index, array) => {
          const last = index === array.length - 1;
          return (
            <custom.TouchableOpacity
              key={index}
              style={{
                paddingHorizontal: 14,
                paddingVertical: 4,
                borderWidth: 1,
                borderColor: '#EEEEEE',
                backgroundColor: '#FAF9FF',
                marginRight: last ? 20 : 14,
              }}
              onPress={() => {
                dispatch(actions.setScreen('Search'));
              }}
            >
              <Text
                style={{
                  ...theme.fonts.Lato_400Regular,
                  fontSize: utils.responsiveFontSize(15),
                  lineHeight: utils.responsiveFontSize(15) * 1.7,
                  color: theme.colors.textColor,
                }}
              >
                {item.name}
              </Text>
            </custom.TouchableOpacity>
          );
        })}
      </custom.ScrollView>
    );
  };

  const renderFeatured = () => {
    const slice = featured?.slice(0, 12);
    // const slice = utils.products(products).featured?.slice(0, 12);
    return (
      <View style={{marginBottom: 40}}>
        <components.BlockHeading
          title='Featured Products'
          onPress={() => {
            navigation.navigate('Shop', {
              title: 'Featured Products',
              products: featured,
            });
          }}
          containerStyle={{marginHorizontal: 20, marginBottom: 20}}
        />
        <FlatList
          data={slice}
          horizontal={true}
          refreshing={isLoading}
          // onRefresh={triggerMutation}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{paddingLeft: 20}}
          showsHorizontalScrollIndicator={false}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          pagingEnabled={Platform.OS === 'ios' ? true : false}
          snapToInterval={theme.sizes.width - utils.responsive(60.4).width}
          renderItem={({item, index}) => {
            const lastItem = index === slice.length - 1;
            return <components.FeaturedItem item={item} lastItem={lastItem} />;
          }}
        />
      </View>
    );
  };

  const renderBanner_1 = () => {
    const banner = banners[0];
    const onPress = () => {
      navigation.navigate('Shop', {
        title: 'Shop',
        products: products,
      });
    };
    return (
      <custom.TouchableOpacity style={{marginBottom: 40}} onPress={onPress}>
        <custom.Image
          source={{uri: banner?.image}}
          style={{
            width: theme.sizes.width - 40,
            aspectRatio: 335 / 202,
            alignSelf: 'center',
          }}
        />
      </custom.TouchableOpacity>
    );
  };

  const renderBestSellers = () => {
    const slice = bestSellers?.slice(0, 12);
    return (
      <View style={{marginBottom: 40}}>
        <components.BlockHeading
          title='Best sellers'
          onPress={() => {
            navigation.navigate('Shop', {
              title: 'Best sellers',
              products: bestSellers,
            });
          }}
          containerStyle={{marginHorizontal: 20, marginBottom: 20}}
        />
        <View style={{marginHorizontal: 20}}>
          {slice?.map((item, index, array) => {
            const lastItem = index === array.length - 1;
            return (
              <components.BestSellerItem
                key={index}
                item={item}
                lastItem={lastItem}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderBanner_2 = () => {
    const banner = banners[1];
    const onPress = () => {
      navigation.navigate('Shop', {
        title: 'Shop',
        products: products,
      });
    };
    return (
      <custom.TouchableOpacity style={{marginBottom: 20}} onPress={onPress}>
        <custom.Image
          source={{uri: banner?.image}}
          style={{
            width: theme.sizes.width - 40,
            aspectRatio: 335 / 211,
            alignSelf: 'center',
          }}
        />
      </custom.TouchableOpacity>
    );
  };

  const renderContent = () => {
    const loading = productsLoading || bannersLoading || categoriesLoading;
    const error = productsError || bannersError || categoriesError;
    const data = productsData || bannersData || categoriesData;
    const empty =
      products.length === 0 &&
      bestSellers.length === 0 &&
      featured.length === 0;

    if (loading) {
      return <components.Loader />;
    }

    if (empty) {
      return (
        <custom.SmartView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>You don't have any data.</Text>
        </custom.SmartView>
      );
    }

    if (error) {
      return (
        <custom.SmartView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Something went wrong.</Text>
        </custom.SmartView>
      );
    }

    if (data) {
      return (
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={triggerMutation}
            />
          }
        >
          {renderCategories()}
          {renderFeatured()}
          {renderBanner_1()}
          {renderBestSellers()}
          {renderBanner_2()}
        </ScrollView>
      );
    }
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

export default Home;
