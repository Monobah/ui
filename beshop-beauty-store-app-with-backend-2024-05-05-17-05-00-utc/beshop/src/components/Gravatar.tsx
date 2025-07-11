import React from 'react';
import RNGravatar from '@krosben/react-native-gravatar';

type Props = {email: string; size: number};

const Gravatar: React.FC<Props> = ({email, size}): JSX.Element => {
  return <RNGravatar email={email} size={size} />;
};

export default Gravatar;
