import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {CategoryType, ProductType} from '../../types';

type Props = {
  item: CategoryType;
  products?: ProductType[];
};

const CategoryItem: React.FC<Props> = ({item, products}) => {
  const navigation = hooks.useNavigation();
  const data = products instanceof Array ? products : [];
  return (
    <TouchableOpacity
      style={{
        width: theme.sizes.width / 2 - 7.5,
        marginBottom: 15,
        height: 200,
      }}
      onPress={() => {
        navigation.navigate('Shop', {
          title: item.name,
          products: data.filter((product) =>
            product.categories.includes(item.name),
          ),
        });
      }}
    >
      <custom.Image
        source={{uri: item.image || ''}}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode='cover'
      />
      <View
        style={{
          position: 'absolute',
          paddingHorizontal: 10,
          paddingVertical: 5,
          bottom: 0,
          backgroundColor: theme.colors.white,
          alignSelf: 'center',
        }}
      >
        <text.H5>{item.name}</text.H5>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CategoryItem);
