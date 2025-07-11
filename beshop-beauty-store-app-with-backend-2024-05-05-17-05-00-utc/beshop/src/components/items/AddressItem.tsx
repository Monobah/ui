import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  item: {
    id: number;
    name: string;
    address: string;
  };
  last?: boolean;
};

import {text} from '../../text';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';

const AddressItem: React.FC<Props> = ({item, last}) => {
  return (
    <custom.TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: last ? 0 : 8,
      }}
      onPress={() => {}}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#FAF9FF',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#EEEEEE',
          marginRight: 14,
        }}
      >
        {item.name === 'Home' && <svg.HomeSvg />}
        {item.name === 'Work' && <svg.BriefcaseSvg />}
        {item.name === 'Other' && <svg.MapPinSvg />}
      </View>
      <View style={{marginRight: 'auto'}}>
        <text.H5 numberOfLines={1} style={{marginBottom: 4}}>
          {item.name}
        </text.H5>
        <text.T14>{item.address}</text.T14>
      </View>
      <svg.EditSvg />
    </custom.TouchableOpacity>
  );
};

export default AddressItem;
