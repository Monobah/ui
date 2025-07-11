import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';

import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {product} from '../../product';
import {ProductType} from '../../types';
// import SaleBadge from '../badges/SaleBadge';

type Props = {item: ProductType; lastItem: boolean};

const FeaturedItem: React.FC<Props> = ({item, lastItem}) => {
  // 375 = 100%
  // 204 = how much we need to find out in % (204 * 100) / 375 = 54.4%
  // 100% - 54.4% = 45.6%

  // 375 = 100%
  // 200 = how much we need to find out in % (200 * 100) / 375 = 53.3%
  const navigation = hooks.useNavigation();
  return (
    <TouchableOpacity
      style={{marginRight: lastItem ? 20 : 14}}
      onPress={() => {
        navigation.navigate('Product', {item});
      }}
    >
      <custom.ImageBackground
        source={{uri: item.image}}
        style={{
          width: utils.responsive(53.3).width,
          aspectRatio: 200 / 250,
          marginBottom: 14,
        }}
        resizeMode='cover'
      >
        <product.ProductRating item={item} style={{padding: 7}} />
        <product.ProductInWishlist
          item={item}
          containerStyle={{
            position: 'absolute',
            right: 10,
            bottom: 60,
          }}
        />
        <product.ProductInCart
          item={item}
          version={2}
          containerStyle={{
            position: 'absolute',
            right: 10,
            bottom: 10,
          }}
        />
      </custom.ImageBackground>
      <View
        style={{
          width: responsiveWidth(36),
        }}
      >
        <product.ProductName item={item} style={{marginBottom: 5}} />
        <product.ProductPrice item={item} />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(FeaturedItem);
