import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MinusSvg: React.FC = () => (
  <Svg width={14} height={14} fill='none'>
    <Path
      stroke='#222'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M2.898 7h8.114'
    />
  </Svg>
);

export default MinusSvg;
