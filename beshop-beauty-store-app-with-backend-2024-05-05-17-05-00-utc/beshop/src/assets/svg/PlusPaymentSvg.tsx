import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusPaymentSvg: React.FC = () => {
  return (
    <Svg width={22} height={22} fill='none'>
      <Path
        stroke='#222'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M11 4.583v12.834M4.624 11h12.752'
      />
    </Svg>
  );
};

export default PlusPaymentSvg;
