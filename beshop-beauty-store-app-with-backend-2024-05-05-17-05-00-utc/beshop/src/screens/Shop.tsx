import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {custom} from '../custom';
import {components} from '../components';
import {ShopScreenProps} from '../types';
import {theme} from '../constants';

const Shop: React.FC<ShopScreenProps> = ({route}) => {
  const {title, products} = route.params;
  const navigation = hooks.useNavigation();

  const [state, setState] = useState(0);

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS backgroundColor={theme.colors.pastel} />;
  };

  const renderStatusBarAndroid = () => {
    return <custom.StatusBarAndroid backgroundColor={theme.colors.pastel} />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        goBack={true}
        title={title}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderFilterAndSort = () => {
    if (products?.length === 0) {
      return null;
    }

    if (products?.length > 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 18,
          }}
        >
          <custom.TouchableOpacity
            onPress={() => {
              navigation.navigate('Filter');
            }}
          >
            <svg.FilterSvg />
          </custom.TouchableOpacity>
          <custom.TouchableOpacity>
            <svg.SortingBySvg />
          </custom.TouchableOpacity>
        </View>
      );
    }
  };

  const renderContent = () => {
    if (products?.length === 0) {
      return (
        <custom.SmartView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{textAlign: 'center', color: theme.colors.mainColor}}>
            You don't have any products yet. {'\n'}Please, add some.
          </Text>
        </custom.SmartView>
      );
    }

    if (products?.length > 0) {
      return (
        <custom.FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 20,
            flexGrow: 1,
            paddingBottom: 20,
          }}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={({item, index}) => {
            const lastItem = index === products.length - 1;
            return (
              <components.ShopItem
                key={index}
                item={item}
                lastItem={lastItem}
              />
            );
          }}
        />
      );
    }
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBarIOS()}
      {renderStatusBarAndroid()}
      {renderHeader()}
      <Text
        onPress={() => {
          setState(state + 1);
        }}
      >
        add
      </Text>
      <Text>{state}</Text>
      {renderFilterAndSort()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Shop;
