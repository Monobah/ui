import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  style?: object;
  bounce?: boolean;
  children: React.ReactNode;
  contentContainerStyle?: object;
  alwaysBounceHorizontal?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
};

const KAScrollView: React.FC<Props> = ({
  style,
  bounce,
  children,
  contentContainerStyle,
  alwaysBounceHorizontal,
  showsVerticalScrollIndicator,
  showsHorizontalScrollIndicator,
}): JSX.Element => {
  return (
    <KeyboardAwareScrollView
      style={{...style}}
      bounces={bounce ?? true}
      extraScrollHeight={20}
      enableAutomaticScroll={true}
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={{...contentContainerStyle}}
      alwaysBounceHorizontal={alwaysBounceHorizontal ?? false}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator ?? false}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator ?? false}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KAScrollView;
