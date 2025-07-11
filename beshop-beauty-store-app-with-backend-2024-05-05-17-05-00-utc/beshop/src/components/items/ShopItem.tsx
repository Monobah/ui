import React from 'react';

import {hooks} from '../../hooks';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {product} from '../../product';
import {theme} from '../../constants';
import {ProductType} from '../../types';

type Props = {item: ProductType; lastItem: boolean};

const ShopItem: React.FC<Props> = ({item, lastItem}) => {
  const navigation = hooks.useNavigation();
  const blockWidth = utils.responsive(50).width - 20 - 7.5;
  console.log('ShopItem is rendered');
  return (
    <custom.TouchableOpacity
      style={{width: blockWidth, marginBottom: 20}}
      onPress={() => {
        navigation.navigate('Product', {item});
      }}
    >
      <custom.ImageBackground
        source={{uri: item.image}}
        style={{
          width: '100%',
          aspectRatio: 160 / 170,
          marginBottom: 12,
          backgroundColor: theme.colors.imageBackground,
        }}
        resizeMode='contain'
      >
        <product.ProductRating item={item} style={{padding: 7}} />
        <product.ProductSale
          item={item}
          containerStyle={{
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        />
        <product.ProductInWishlist
          version={2}
          item={item}
          containerStyle={{
            position: 'absolute',
            padding: 8,
            right: 6,
            bottom: 42,
          }}
        />
        <product.ProductInCart
          item={item}
          version={1}
          containerStyle={{
            position: 'absolute',
            padding: 8,
            right: 6,
            bottom: 14,
          }}
        />
      </custom.ImageBackground>
      <product.ProductName item={item} style={{marginBottom: 4}} />
      <product.ProductPrice item={item} />
    </custom.TouchableOpacity>
  );
};

export default React.memo(ShopItem);
