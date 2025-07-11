import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

type Props = {fillColor?: string; strokeColor?: string};

const HeartSmallSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg width={14} height={13} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          fill={fillColor}
          stroke={strokeColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.2}
          d='M12.172 2.05a3.158 3.158 0 0 0-4.466 0l-.609.608-.609-.609a3.158 3.158 0 0 0-4.466 4.466l.609.609 4.466 4.466 4.466-4.466.609-.609a3.159 3.159 0 0 0 0-4.466v0Z'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h14v13H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HeartSmallSvg;
