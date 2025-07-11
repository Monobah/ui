import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import {product} from '../../product';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {ProductType} from '../../types';
import {components} from '../../components';
// import SaleBadge from '../badges/SaleBadge';

type Props = {item: ProductType; lastItem: boolean};

const BestSellerItem: React.FC<Props> = ({item, lastItem}) => {
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
    </TouchableOpacity>
  );
};

export default React.memo(BestSellerItem);
