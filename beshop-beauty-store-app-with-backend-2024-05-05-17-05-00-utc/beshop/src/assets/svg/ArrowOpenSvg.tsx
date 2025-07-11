import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ArrowOpenSvg = () => {
  return (
    <Svg width={11} height={6} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          stroke='#222'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M.857 5.143 5.143.857l4.286 4.286'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M10.143.143v5.714h-10V.143z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ArrowOpenSvg;
