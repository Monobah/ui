import React from 'react';
import {View, TouchableOpacity, ViewStyle, Text} from 'react-native';

import {hooks} from '../hooks';
import {theme, tabs} from '../constants';
import {setScreen} from '../store/slices/tabSlice';

const BottomTabBar: React.FC = () => {
  const dispatch = hooks.useDispatch();

  const containerStyle: ViewStyle = {
    borderTopWidth: 1,
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 34,
    justifyContent: 'space-between',
    borderTopColor: '#EEEEEE',
    backgroundColor: theme.colors.white,
    // marginBottom: homeIndicatorHeight() === 0 ? 20 : 0,
  };

  return (
    <View style={{...containerStyle}}>
      {tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{alignItems: 'center'}}
            onPress={() => dispatch(setScreen(item.name))}
          >
            <View style={{marginBottom: 4}}>
              <item.icon />
            </View>
            <Text
              style={{
                ...theme.fonts.Lato_700Bold,
                textTransform: 'uppercase',
                fontSize: 8,
                textAlign: 'center',
                color: theme.colors.textColor,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default React.memo(BottomTabBar);
