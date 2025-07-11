import React from 'react';
import {View, Text} from 'react-native';

import {text} from '../text';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {CheckoutScreenProps} from '../types';

const Checkout: React.FC<CheckoutScreenProps> = ({route}) => {
  const {order} = route.params;
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const blockStyle = {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FAF9FF',
    marginBottom: 8,
    padding: 20,
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
        title='Checkout'
        style={{marginBottom: 10}}
        goBack={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderOrderDetails = () => {
    return (
      <View style={{...blockStyle}}>
        <components.CheckoutHeading
          leftBlock='My order'
          rightBlock={`$${order.total}`}
        />
        {order.products.map((item, index, array) => {
          const lastElement = index === array.length - 1;
          return (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // marginBottom: lastElement ? 0 : 6,
                marginBottom: 6,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.Lato_400Regular,
                  color: theme.colors.textColor,
                  fontSize: utils.responsiveFontSize(14),
                  lineHeight: utils.responsiveFontSize(14) * 1.5,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  ...theme.fonts.Lato_400Regular,
                  color: theme.colors.textColor,
                  fontSize: utils.responsiveFontSize(14),
                  lineHeight: utils.responsiveFontSize(14) * 1.5,
                }}
              >{`$${item.quantity} x ${item.price}`}</Text>
            </View>
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              ...theme.fonts.Lato_400Regular,
              color: theme.colors.textColor,
              fontSize: utils.responsiveFontSize(14),
              lineHeight: utils.responsiveFontSize(14) * 1.5,
            }}
          >
            Discount
          </Text>
          <Text
            style={{
              ...theme.fonts.Lato_400Regular,
              color: theme.colors.textColor,
              fontSize: utils.responsiveFontSize(14),
              lineHeight: utils.responsiveFontSize(14) * 1.5,
            }}
          >
            - ${order.discount}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              ...theme.fonts.Lato_400Regular,
              color: theme.colors.textColor,
              fontSize: utils.responsiveFontSize(14),
              lineHeight: utils.responsiveFontSize(14) * 1.5,
            }}
          >
            Delivery
          </Text>
          <Text
            style={{
              ...theme.fonts.Lato_400Regular,
              textTransform: 'capitalize',
              color: '#00824B',
              fontSize: utils.responsiveFontSize(14),
              lineHeight: utils.responsiveFontSize(14) * 1.5,
            }}
          >
            {order.delivery}
          </Text>
        </View>
      </View>
    );
  };

  const renderShippingDetails = () => {
    return (
      <custom.TouchableOpacity style={{...blockStyle}} onPress={() => {}}>
        <components.CheckoutHeading
          leftBlock='Shipping details'
          onPress={true}
        />
        <text.T14 numberOfLines={1}>
          8000 S Kirkland Ave, Chicago, IL 6065...
        </text.T14>
      </custom.TouchableOpacity>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <custom.TouchableOpacity style={{...blockStyle}} onPress={() => {}}>
        <components.CheckoutHeading leftBlock='Payment method' onPress={true} />
        <text.T14 numberOfLines={1}>7741 ******** 6644</text.T14>
      </custom.TouchableOpacity>
    );
  };

  const renderComment = () => {
    return (
      <custom.InputFieldBig
        containerStyle={{
          marginBottom: utils.responsive(5).height,
        }}
      />
    );
  };

  const renderButtons = () => {
    return (
      <components.Button
        title={`Confirm order ($${order.total})`}
        onPress={() => {
          dispatch(actions.resetCart());
          navigation.reset({
            index: 0,
            routes: [{name: 'OrderSuccessful'}],
            // routes: [{name: 'OrderFailed'}],
          });
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          padding: 20,
        }}
      >
        {renderOrderDetails()}
        {renderShippingDetails()}
        {renderPaymentMethod()}
        {renderComment()}
        {renderButtons()}
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

export default Checkout;
