import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

import {theme} from '../../constants';

type Props = {
  status: 'created' | 'confirmed' | 'shipping' | 'delivering' | 'receiving';
  progress?: boolean;
  title?: string;
};

const OrderStatusSvg: React.FC<Props> = ({status, progress, title}) => {
  return (
    <Svg width={30} height={67} fill='none'>
      <Circle cx={15} cy={15} r={14} stroke='#999' strokeWidth={2} />
      <Circle cx={15} cy={15} r={6} fill='#222' />
      {title !== 'Receiving' && (
        <Path
          stroke={'red'}
          strokeDasharray='2 4'
          strokeLinecap='round'
          d='M15.5 37.5v29'
        />
      )}
    </Svg>
  );
};

export default OrderStatusSvg;
