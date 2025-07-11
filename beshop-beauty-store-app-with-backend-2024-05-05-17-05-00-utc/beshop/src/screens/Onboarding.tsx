import React, {useRef} from 'react';
import {FlatList} from 'react-native';

import {hooks} from '../hooks';
import {utils} from '../utils';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';
import {actions} from '../store/actions';

const onboardingData = [
  {
    id: 1,
    image: 'https://george-fx.github.io/beshop/onboarding/01.png',
  },
  {
    id: 2,
    image: 'https://george-fx.github.io/beshop/onboarding/02.png',
  },
  {
    id: 3,
    image: 'https://george-fx.github.io/beshop/onboarding/03.png',
  },
];

const Onboarding: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const flatListRef = useRef<FlatList>(null);

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid
        backgroundColor={theme.colors.pastel}
        barStyle='dark-content'
      />
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <custom.Image
        source={{uri: item.image}}
        style={{
          width: utils.responsive(100).width,
          height: utils.responsive(100).height,
        }}
        resizeMode='cover'
      />
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='Get Started'
        containerStyle={{
          position: 'absolute',
          bottom: utils.responsive(4).height + utils.homeIndicatorHeight(),
          paddingHorizontal: 20,
        }}
        onPress={() => {
          dispatch(actions.setStart(false));
        }}
      />
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        bounces={false}
        data={onboardingData}
        ref={flatListRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0, position: 'absolute'}}
        renderItem={({item}) => renderItem({item})}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return (
    <custom.SmartView>
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderFlatList()}
      {renderButton()}
    </custom.SmartView>
  );
};

export default Onboarding;
