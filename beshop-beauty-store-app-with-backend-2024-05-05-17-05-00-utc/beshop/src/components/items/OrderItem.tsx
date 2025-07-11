import React from 'react';
import {View} from 'react-native';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {product} from '../../product';
import {ProductType} from '../../types';

type Props = {lastItem: boolean; item: ProductType};

const OrderItem: React.FC<Props> = ({item, lastItem}) => {
  const navigation = hooks.useNavigation();

  return (
    <custom.TouchableOpacity
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
        </View>
        <product.ProductPrice
          item={item}
          containerStyle={{marginBottom: 'auto'}}
        />
      </View>
      <product.ProductCounter item={item} />
    </custom.TouchableOpacity>
  );
};

export default React.memo(OrderItem);
