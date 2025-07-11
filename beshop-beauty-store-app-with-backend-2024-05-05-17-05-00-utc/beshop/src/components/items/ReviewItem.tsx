import {View, Text} from 'react-native';
import React from 'react';

import {text} from '../../text';
import {custom} from '../../custom';
import {product} from '../../product';
import {ReviewType, ProductType} from '../../types';
import {theme} from '../../constants';
import {utils} from '../../utils';

type Props = {
  review: ReviewType;
  item: ProductType;
  lastItem: boolean;
};

const ReviewItem: React.FC<Props> = ({review, item, lastItem}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        padding: 20,
        marginBottom: lastItem ? 0 : 8,
        borderColor: '#EEEEEE',
      }}
    >
      <custom.Image
        source={{uri: review.image}}
        style={{
          width: 30,
          height: 30,
          marginRight: 14,
        }}
        imageStyle={{borderRadius: 30 / 2}}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
            justifyContent: 'space-between',
          }}
        >
          <text.H5>{review.name}</text.H5>
          <product.ProductRating item={item} />
        </View>
        <Text
          style={{
            ...theme.fonts.Lato_400Regular,
            fontSize: utils.responsiveFontSize(10),
            color: theme.colors.textColor,
            lineHeight: utils.responsiveFontSize(10) * 1.5,
            marginBottom: 10,
          }}
        >
          {review.date}
        </Text>
        <Text
          style={{
            ...theme.fonts.textStyle_14,
            color: theme.colors.textColor,
            lineHeight: utils.responsiveFontSize(14) * 1.5,
          }}
        >
          {review.comment}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(ReviewItem);
