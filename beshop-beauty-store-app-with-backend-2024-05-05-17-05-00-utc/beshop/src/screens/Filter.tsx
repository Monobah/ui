import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {text} from '../text';
import {utils} from '../utils';
import {hooks} from '../hooks';

import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const Filter: React.FC = () => {
  const navigation = hooks.useNavigation();
  const {
    data: colorsData,
    error: colorsError,
    isLoading: colorsLoading,
  } = hooks.useGetColorsQuery();

  const {
    data: tagsData,
    error: tagsError,
    isLoading: tagsLoading,
  } = hooks.useGetTagsQuery();

  //  это означает, что если data - массив, то мы присваиваем его colors, если нет, то colors = []
  const colors = colorsData instanceof Array ? colorsData : [];
  const tags = tagsData instanceof Array ? tagsData : [];

  type SelectedColorType = (typeof colors)[number] | undefined;

  const [selectedColor, setSelectedColor] = useState<SelectedColorType>();
  const [sale, setSale] = useState(false);
  const [newProduct, setNewProduct] = useState(false);
  const [productTag, setProductTag] = useState<string[]>([]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Category 2', value: 'Category 2'},
    {label: 'Category 3', value: 'Category 3'},
    {label: 'Category 4', value: 'Category 4'},
  ]);

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
        title='Filter'
        goBack={true}
        backgroundColor={theme.colors.pastel}
      />
    );
  };

  const renderDropDown = () => {
    if (colors?.length > 0) {
      return (
        <View style={{marginTop: 20, marginBottom: 20, zIndex: 1}}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: '#FAF9FF',
              paddingHorizontal: 20,
              marginHorizontal: 20,
              width: theme.sizes.width - 40,
              borderRadius: 0,
              borderWidth: 1,
              borderColor: '#EEEEEE',
            }}
            textStyle={{
              ...theme.fonts.Lato_400Regular,
              fontSize: utils.responsiveFontSize(16),
              lineHeight: utils.responsiveFontSize(16) * 1.7,
              color: theme.colors.textColor,
              textTransform: 'capitalize',
            }}
            dropDownContainerStyle={{
              borderColor: '#EEEEEE',
              marginHorizontal: 20,
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: theme.sizes.width - 40,
              borderRadius: 0,
              backgroundColor: '#FAF9FF',
              alignSelf: 'center',
            }}
          />
        </View>
      );
    }

    return null;
  };

  const renderColors = () => {
    const empty = colors?.length > 0;

    if (empty) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
            marginTop: 20,
            paddingBottom: 20,
          }}
        >
          <text.H5 style={{marginRight: 26}}>Color</text.H5>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {colors.map((item, index, array) => {
              const lastElement = index === array.length - 1;
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: utils.responsive(8).width,
                    height: utils.responsive(8).width,
                    marginRight: lastElement ? 0 : 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: item.code,
                    borderWidth: 2,
                    borderColor:
                      selectedColor === item ? theme.colors.accent : item.code,
                  }}
                  onPress={() => setSelectedColor(item)}
                />
              );
            })}
          </View>
        </View>
      );
    }

    return null;
  };

  const renderPriceSlider = () => {
    return (
      <View style={{marginBottom: 60}}>
        <Text
          style={{
            marginBottom: 20,
            ...theme.fonts.H4,
            color: theme.colors.mainColor,
          }}
        >
          Price
        </Text>
        <MultiSlider
          isMarkersSeparated={true}
          customMarkerLeft={(e) => {
            return (
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    marginHorizontal: 10,
                    backgroundColor: theme.colors.accent,
                    borderRadius: 15 / 2,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: -30,
                    ...theme.fonts.Lato_400Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  ${e.currentValue}
                </Text>
              </View>
            );
          }}
          customMarkerRight={(e) => {
            return (
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    marginHorizontal: 10,
                    backgroundColor: theme.colors.accent,
                    borderRadius: 15 / 2,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: -30,
                    ...theme.fonts.Lato_400Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  ${e.currentValue}
                </Text>
              </View>
            );
          }}
          values={[0, 800]}
          min={0}
          max={800}
          step={1}
          sliderLength={theme.sizes.width - 40}
          onValuesChange={(e) => {}}
          selectedStyle={{
            backgroundColor: theme.colors.accent,
            width: 300,
          }}
          unselectedStyle={{
            backgroundColor: '#DBE3F5',
            width: 300,
          }}
          containerStyle={{
            height: 20,
            width: '100%',
          }}
          trackStyle={{
            height: 3,
            width: '100%',
          }}
        />
      </View>
    );
  };

  const renderStatus = () => {
    return (
      <View
        style={{flexDirection: 'row', marginBottom: 40, alignItems: 'center'}}
      >
        <components.Status type='sale' sale={sale} setSale={setSale} />
        <components.Status
          type='new'
          newProduct={newProduct}
          setNewProduct={setNewProduct}
        />
      </View>
    );
  };

  const renderTags = () => {
    return (
      <View
        style={{
          marginBottom: 40,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {tags.map((item, index) => (
          <custom.TouchableOpacity
            style={{
              marginBottom: 8,
              marginRight: 8,
              borderColor: productTag.includes(item.name)
                ? theme.colors.accent
                : '#EEEEEE',
              backgroundColor: '#FAF9FF',
              borderWidth: 1,
            }}
            key={item.id}
            onPress={() => {
              setProductTag((prev: string[]) => {
                if (prev.includes(item.name)) {
                  return prev.filter((e) => e !== item.name);
                }
                if (prev.length === 0) {
                  return [item.name];
                }

                return [...prev, item.name];
              });
            }}
          >
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 6,
                textTransform: 'uppercase',
                fontSize: 12,
                ...theme.fonts.Lato_400Regular,
                color: '#666666',
              }}
            >
              {item.name}
            </Text>
          </custom.TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='apply filters'
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  };

  const renderContent = () => {
    if (colorsLoading || tagsLoading) {
      return <components.Loader />;
    }

    if (colors && colors?.length > 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}
        >
          {renderColors()}
          {renderPriceSlider()}
          {renderStatus()}
          {renderTags()}
          {renderButton()}
        </custom.ScrollView>
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
      {renderDropDown()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Filter;
