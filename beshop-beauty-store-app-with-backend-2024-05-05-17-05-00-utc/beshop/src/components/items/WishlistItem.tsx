import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {product} from '../../product';
import {ProductType} from '../../types';

type Props = {
  item: ProductType;
  lastItem: boolean;
};

const WishlistItem: React.FC<Props> = ({item, lastItem}) => {
  const navigation = hooks.useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        padding: 10,
        borderColor: '#EEEEEE',
        flexDirection: 'row',
        marginBottom: lastItem ? 0 : 8,
      }}
      onPress={() => {
        navigation.navigate('Product', {item});
      }}
    >
      <custom.ImageBackground
        source={{uri: item.image}}
        style={{
          width: 80,
          height: 80,
          marginRight: 14,
          backgroundColor: '#F6F5FB',
        }}
        resizeMode='contain'
      >
        <product.ProductSale item={item} />
      </custom.ImageBackground>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}
        >
          <product.ProductName item={item} />
          <product.ProductInWishlist
            item={item}
            version={2}
            containerStyle={{
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}
          />
        </View>
        <product.ProductPrice
          item={item}
          containerStyle={{marginBottom: 'auto'}}
        />
        <product.ProductRating item={item} />
      </View>
      <View style={{position: 'absolute', right: 0, bottom: 0, padding: 6.5}}>
        <product.ProductInCart item={item} version={2} containerStyle={{}} />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(WishlistItem);
