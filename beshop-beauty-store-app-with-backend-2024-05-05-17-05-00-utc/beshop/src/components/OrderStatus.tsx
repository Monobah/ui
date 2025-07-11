import {View, Text} from 'react-native';
import React from 'react';

import {svg} from '../assets/svg';
import {text} from '../text';

type Props = {
  title: string;
  description: string;
  status: 'created' | 'confirmed' | 'shipping' | 'delivering' | 'receiving';
};

const OrderStatus: React.FC<Props> = ({title, description, status}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 6}}>
      <svg.OrderStatusSvg status={status} title={title} />
      <View style={{marginLeft: 24}}>
        <text.H5 style={{marginBottom: 6}}>{title}</text.H5>
        <text.T14>{description}</text.T14>
      </View>
    </View>
  );
};

export default OrderStatus;
