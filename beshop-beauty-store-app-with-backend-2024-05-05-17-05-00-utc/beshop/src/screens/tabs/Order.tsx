import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {text} from '../../text';
import {utils} from '../../utils';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';

const Order: React.FC = () => {
  const navigation = hooks.useNavigation();
  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const subtotal = hooks
    .useSelector((state) => state.cartSlice.total)
    .toFixed(2);
  const discount = hooks.useSelector((state) => state.cartSlice.discount);
  const total = (
    hooks.useSelector((state) => state.cartSlice.total) - discount
  ).toFixed(2);
  const delivery = hooks.useSelector((state) => state.cartSlice.delivery);

  const [promocode, setPromocode] = useState('');
  const [promocodeApplied, setPromocodeApplied] = useState(false);

  const {data, error, isLoading} = hooks.useGetProductsQuery();

  const products = data instanceof Array ? data : [];

  const order = {
    products: cart,
    subtotal: subtotal,
    discount: discount,
    total: total,
    delivery: delivery,
  };

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
        goBack={true}
        basket={true}
        title={cart.length > 0 ? 'Order' : null}
        style={{backgroundColor: theme.colors.pastel}}
      />
    );
  };

  const renderEmptyCart = () => {
    if (cart.length === 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 23,
            paddingBottom: 30,
            flexGrow: 1,
          }}
        >
          <custom.Image
            source={{
              uri: 'https://george-fx.github.io/beshop/status/04.png',
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
              marginBottom: 14,
              textTransform: 'capitalize',
            }}
          >
            Your cart is empty!
          </text.H2>
          <Text
            style={{
              ...theme.fonts.textStyle_16,
              textAlign: 'center',
              lineHeight: utils.responsiveFontSize(16) * 1.7,
              color: theme.colors.textColor,
              marginBottom: 30,
            }}
          >
            Looks like you haven't made {'\n'} your order yet.
          </Text>
          <components.Button
            title='shop now'
            onPress={() => {
              navigation.navigate('Shop', {
                title: 'Shop',
                products: products,
              });
            }}
          />
        </custom.ScrollView>
      );
    }

    return null;
  };

  const renderProducts = () => {
    if (cart.length > 0) {
      return (
        <View style={{marginBottom: 14, marginHorizontal: 20}}>
          {cart.map((item, index, array) => {
            const lastItem = index === array.length - 1;
            return (
              <components.OrderItem
                key={item.id}
                item={item}
                lastItem={lastItem}
              />
            );
          })}
        </View>
      );
    }

    return null;
  };

  const renderPromocodeInput = () => {
    if (cart.length > 0) {
      if (!promocodeApplied) {
        return (
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: utils.responsive(10).height,
            }}
          >
            <custom.InputField
              placeholder='Enter promocode'
              onChangeText={(text) => setPromocode(text)}
              containerStyle={{
                width: utils.responsive(52).width,
                marginRight: 10,
                marginBottom: 0,
              }}
            />
            <custom.TouchableOpacity
              style={{
                flex: 1,
                height: 60,
                backgroundColor: '#FAF9FF',
                borderWidth: 1,
                borderColor: '#EEEEEE',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                if (promocode.length > 0) {
                  setPromocodeApplied(true);
                }
              }}
            >
              <Text
                style={{
                  ...theme.fonts.Lato_400Regular,
                  fontSize: utils.responsiveFontSize(14),
                  textTransform: 'uppercase',
                  color: theme.colors.mainColor,
                }}
              >
                apply
              </Text>
            </custom.TouchableOpacity>
          </View>
        );
      }
    }

    return null;
  };

  const renderPromocodeApplied = () => {
    if (cart.length > 0) {
      if (promocodeApplied) {
        return (
          <View
            style={{
              marginHorizontal: 20,
              marginBottom: utils.responsive(10).height,
            }}
          >
            <svg.PromocodeAppliedSvg />
          </View>
        );
      }
    }

    return null;
  };

  const renderOrderDetails = () => {
    if (cart.length > 0) {
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: '#EEEEEE',
            marginHorizontal: 20,
            padding: 20,
            backgroundColor: '#FAF9FF',
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 9,
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.mainColor,
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.mainColor,
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              ${subtotal}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 9,
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.textColor,
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.textColor,
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              - ${discount}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 9,
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.textColor,
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: '#00824B',
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              {delivery}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 2,
              marginBottom: 9,
              backgroundColor: theme.colors.mainColor,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 9,
            }}
          >
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.mainColor,
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                ...theme.fonts.textStyle_14,
                color: theme.colors.mainColor,
                lineHeight: utils.responsiveFontSize(14) * 1.5,
              }}
            >
              ${total}
            </Text>
          </View>
        </View>
      );
    }

    return null;
  };

  const renderButton = () => {
    if (cart.length > 0) {
      return (
        <components.Button
          title='proceed to checkout'
          containerStyle={{
            paddingHorizontal: 20,
          }}
          onPress={() => {
            navigation.navigate('Checkout', {order});
          }}
        />
      );
    }

    return null;
  };

  const renderContent = () => {
    if (isLoading) {
      return <components.Loader />;
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
        <components.KAScrollView
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          {renderProducts()}
          {renderPromocodeInput()}
          {renderPromocodeApplied()}
          {renderOrderDetails()}
          {renderButton()}
          {renderEmptyCart()}
        </components.KAScrollView>
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
    <custom.SmartView
      style={{
        backgroundColor:
          cart.length > 0 ? theme.colors.white : theme.colors.pastel,
      }}
    >
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Order;
