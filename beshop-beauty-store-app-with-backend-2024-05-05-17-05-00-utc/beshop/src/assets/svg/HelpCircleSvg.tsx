import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const HelpCircleSvg: React.FC = () => {
  return (
    <Svg width={20} height={20} fill='none'>
      <G
        stroke='#222'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        clipPath='url(#a)'
      >
        <Path d='M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z' />
        <Path d='M7.575 7.5a2.5 2.5 0 0 1 4.858.833c0 1.667-2.5 2.5-2.5 2.5M10 14.167h.008' />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h20v20H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HelpCircleSvg;
