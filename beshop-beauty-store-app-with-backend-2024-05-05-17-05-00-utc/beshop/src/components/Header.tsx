import React from 'react';
import {View, Text, Alert, ViewStyle} from 'react-native';

import {text} from '../text';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {setScreen} from '../store/slices/tabSlice';

type Props = {
  logo?: boolean;
  skip?: boolean;
  title?: string | null;
  user?: boolean;
  basket?: boolean;
  goBack?: boolean;
  filter?: boolean;
  search?: boolean;
  style?: ViewStyle;
  userName?: boolean;
  userImage?: boolean;
  bottomLine?: boolean;
  burger?: boolean;
  backgroundColor?: string;
  skipOnPress?: () => void;
};

const Header: React.FC<Props> = ({
  logo,
  skip,
  title,
  style,
  basket,
  search,
  goBack,
  filter,
  skipOnPress,
  backgroundColor,
}) => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const route = hooks.useRoute();

  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const discount = hooks.useSelector((state) => state.cartSlice.discount);
  const total = (
    hooks.useSelector((state) => state.cartSlice.total) - discount
  ).toFixed(2);
  // const total = hooks.useSelector((state) => state.cartSlice.total);
  // const total = hooks.useSelector((state) => state.cartSlice.total).toFixed(2);
  // const total = hooks.useSelector((state) => state.cartSlice.total).toFixed(2);
  // const total = useSelector((state) => state.cartSlice.total);

  const onPress = () => {
    if (cart.length > 0) {
      dispatch(setScreen('Order'));
      route.name === 'Shop' && navigation.navigate('TabNavigator');
      route.name === 'Product' && navigation.navigate('TabNavigator');
    }
    if (cart.length === 0) {
      Alert.alert('Your cart is empty', 'Please add some items to your cart', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    }
  };

  const renderGoBack = () => {
    if (goBack && navigation.canGoBack()) {
      return (
        <View style={{position: 'absolute', left: 0}}>
          <custom.TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <svg.GoBackSvg />
          </custom.TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderSkipText = (): JSX.Element | null => {
    if (skip) {
      return (
        <custom.TouchableOpacity
          style={{
            right: 0,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
          onPress={skipOnPress}
        >
          <Text
            style={{
              // ...theme.fonts.Lato_700Bold,
              fontSize: 14,
              lineHeight: 14 * 1.7,
            }}
          >
            Skip
          </Text>
        </custom.TouchableOpacity>
      );
    }

    return null;
  };

  const renderTitle = (): JSX.Element | null => {
    if (title) {
      return (
        <text.H4
          style={{
            color: theme.colors.mainColor,
            textTransform: title === 'FAQ' ? 'uppercase' : 'capitalize',
          }}
          numberOfLines={1}
        >
          {title}
        </text.H4>
      );
    }

    return null;
  };

  const renderLogo = () => {
    if (logo && !goBack) {
      return (
        <custom.TouchableOpacity
          style={{position: 'absolute', left: 0, paddingHorizontal: 20}}
          onPress={() => {
            dispatch(actions.setScreen('Home'));
          }}
        >
          <svg.LogoSvg />
        </custom.TouchableOpacity>
      );
    }

    return null;
  };

  const renderSearch = () => {
    if (search) {
      return (
        <custom.TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flex: 1,
          }}
          onPress={() => {}}
        >
          <View style={{marginRight: 7}}>
            <svg.SearchSvg />
          </View>
        </custom.TouchableOpacity>
      );
    }

    return null;
  };

  const renderBasket = () => {
    if (basket) {
      return (
        <custom.TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            paddingHorizontal: 20,
          }}
          onPress={onPress}
        >
          <svg.HeaderBasketSvg />
        </custom.TouchableOpacity>
      );
    }

    return null;
  };

  const renderPrice = () => {
    if (basket) {
      return (
        <custom.TouchableOpacity
          style={{
            position: 'absolute',
            right: 35,
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 10,
            bottom: 8,
            backgroundColor: theme.colors.accent,
          }}
          onPress={onPress}
        >
          <Text
            style={{
              color: theme.colors.white,
              ...theme.fonts.Lato_700Bold,
              fontSize: 10,
            }}
          >
            {cart.length > 0 ? `$${total}` : '$0'}
          </Text>
        </custom.TouchableOpacity>
      );
    }
  };

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    backgroundColor: backgroundColor ? backgroundColor : theme.colors.white,
    ...style,
  };

  return (
    <View style={{...containerStyle}}>
      {renderGoBack()}
      {renderTitle()}
      {renderLogo()}
      {renderSkipText()}
      {renderSearch()}
      {renderBasket()}
      {renderPrice()}
    </View>
  );
};

export default React.memo(Header);
