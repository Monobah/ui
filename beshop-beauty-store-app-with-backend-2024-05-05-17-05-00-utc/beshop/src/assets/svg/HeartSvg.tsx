import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {fillColor?: string; strokeColor?: string};

const HeartSvg: React.FC<Props> = ({fillColor, strokeColor}) => (
  <Svg width={40} height={40} fill='none'>
    <Circle cx={20} cy={20} r={20} fill='#fff' />
    <Circle cx={20} cy={20} r={19.5} stroke='#666' strokeOpacity={0.1} />
    <Path
      fill={fillColor}
      stroke={strokeColor}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={0.861}
      d='M25.075 15.925a3.16 3.16 0 0 0-4.467 0l-.608.609-.609-.609a3.158 3.158 0 1 0-4.466 4.467l.608.608L20 25.466 24.466 21l.609-.608a3.158 3.158 0 0 0 0-4.467v0Z'
    />
  </Svg>
);

export default HeartSvg;
