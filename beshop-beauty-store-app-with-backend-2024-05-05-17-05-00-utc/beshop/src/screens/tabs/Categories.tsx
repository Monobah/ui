import React from 'react';
import {View, Text} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {components} from '../../components';

const Categories: React.FC = () => {
  // const renderStatusBar = () => {
  //   return <custom.StatusBar style={{backgroundColor: theme.colors.pastel}} />;
  // };

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = hooks.useGetProductsQuery();

  const {
    data: tagsData,
    error: tagsError,
    isLoading: tagsLoading,
  } = hooks.useGetTagsQuery();

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = hooks.useGetCategoriesQuery();

  const tags = tagsData instanceof Array ? tagsData : [];
  const products = productsData instanceof Array ? productsData : [];
  const categories = categoriesData instanceof Array ? categoriesData : [];

  const selectedTag = hooks.useSelector((state) => state.tagSlice.tag);

  const filteredCategories = () => {
    if (selectedTag === 'all') {
      return categories;
    }

    return categories.filter((item) => {
      return item.tags.includes(selectedTag);
    });
  };

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
        logo={true}
        basket={true}
        search={true}
        style={{backgroundColor: theme.colors.pastel}}
      />
    );
  };

  const renderContent = () => {
    if (categoriesLoading || tagsLoading) {
      return <components.Loader />;
    }

    if (tags.length === 0 || categories.length === 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 50,
          }}
        >
          <text.H2 style={{textAlign: 'center', textTransform: 'capitalize'}}>
            You have no tags or categories. Please, add them in the admin panel.
          </text.H2>
        </custom.ScrollView>
      );
    }

    if (tagsError || categoriesError) {
      return (
        <custom.ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 50,
          }}
        >
          <Text>Something went wrong. Please, try again later.</Text>
        </custom.ScrollView>
      );
    }

    if (tags.length > 0 && categories.length > 0) {
      return <custom.SmartView>{renderCategories()}</custom.SmartView>;
    }
  };

  const renderCategories = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingTop: 15,
        }}
        showsVerticalScrollIndicator={false}
      >
        {filteredCategories().map((item, index, array) => {
          return (
            <components.CategoryItem
              item={item}
              key={item.id}
              products={products}
            />
          );
        })}
      </custom.ScrollView>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
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
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Categories;
