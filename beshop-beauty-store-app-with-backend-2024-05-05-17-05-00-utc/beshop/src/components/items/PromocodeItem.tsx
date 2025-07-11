import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import {text} from '../../text';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {PromocodeType} from '../../types';

type Props = {item: PromocodeType};

const PromocodeItem: React.FC<Props> = ({item}) => {
  const colors = utils.colors(item.discount);

  const fontSize16 = useMemo(() => utils.responsiveFontSize(16), []);

  return (
    <custom.TouchableOpacity
      style={{
        width: theme.sizes.width / 2 - 20 - 7.5,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        padding: 10,
        marginBottom: 15,
      }}
      onPress={() => {
        Clipboard.setString(item.code);
        utils.copyToClipboard(`${item.code}`);
      }}
    >
      <View style={{marginBottom: 14}}>
        <svg.TicketSvg />
      </View>
      <text.H5 style={{marginBottom: 2}} numberOfLines={1}>
        {item.code}
      </text.H5>
      <Text
        style={{
          marginBottom: 2,
          ...theme.fonts.Lato_400Regular,
          color: colors?.backgroundColor,
          fontSize: fontSize16,
          lineHeight: fontSize16 * 1.7,
        }}
        numberOfLines={1}
      >
        {item.discount}% off
      </Text>
      <Text
        style={{
          ...theme.fonts.Lato_400Regular,
          fontSize: 12,
          color: theme.colors.textColor,
        }}
        numberOfLines={1}
      >
        Valid until {item.expires_at}
      </Text>
    </custom.TouchableOpacity>
  );
};

export default React.memo(PromocodeItem);
