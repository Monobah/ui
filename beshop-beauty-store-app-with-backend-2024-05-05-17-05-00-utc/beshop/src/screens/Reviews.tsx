import {View, Text} from 'react-native';
import React from 'react';

import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

import {ReviewsScreenProps} from '../types';

const Reviews: React.FC<ReviewsScreenProps> = ({route}) => {
  const {reviews} = route.params;
  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS backgroundColor={theme.colors.pastel} />;
  };

  const renderStatusBarAndroid = () => {
    return (
      <custom.StatusBarAndroid
        barStyle='dark-content'
        translucent={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderHeader = () => {
    return (
      <components.Header
        goBack={true}
        title='Reviews'
        style={{backgroundColor: theme.colors.pastel}}
      />
    );
  };

  const renderContent = () => {
    return (
      <custom.FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: 20,
          paddingVertical: 20,
        }}
        renderItem={({item}) => {
          const lastItem = reviews[reviews.length - 1].id === item.id;
          return (
            <components.ReviewItem
              review={item}
              item={item}
              lastItem={lastItem}
            />
          );
        }}
      />
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Reviews;
