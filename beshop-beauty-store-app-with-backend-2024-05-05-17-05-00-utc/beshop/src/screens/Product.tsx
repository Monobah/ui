import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

import {text} from '../text';
import {utils} from '../utils';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {product} from '../product';
import {theme} from '../constants';
import {actions} from '../store/actions';
import {components} from '../components';
import {ProductScreenProps} from '../types';

const reviews = [
  {
    id: 1,
    name: 'Adrianna Mercado',
    image: 'https://george-fx.github.io/manero/reviews/01.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
  {
    id: 2,
    name: 'Dante Valdez',
    image: 'https://george-fx.github.io/manero/reviews/02.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
  {
    id: 3,
    name: 'Troy Ingram',
    image: 'https://george-fx.github.io/manero/reviews/03.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
  {
    id: 4,
    name: 'Joshua Bean',
    image: 'https://george-fx.github.io/manero/reviews/04.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
];

const Product: React.FC<ProductScreenProps> = ({route}) => {
  const {item} = route.params;
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const {data, error, isLoading} = hooks.useGetColorsQuery();

  const names = item.colors as string[];
  const images = JSON.parse(item.images) as string[];
  const dataColors = data instanceof Array ? data : [];
  const colors = dataColors?.filter((item) => names?.includes(item.name));

  type SelectedColorType = (typeof colors)[number] | undefined;

  const [selectedColor, setSelectedColor] = useState<SelectedColorType>();

  const updateCurrentSlideIndex = (e: any): void => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const renderStatusBarIOS = () => {
    return <custom.StatusBarIOS />;
  };

  const renderStatusBarAndroid = () => {
    return <custom.StatusBarAndroid />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} />;
  };

  const renderCarousel = () => {
    const renderImages = () => {
      return (
        <custom.ScrollView
          bounce={false}
          horizontal={true}
          pagingEnabled={true}
          style={{marginBottom: 20}}
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{
            backgroundColor: theme.colors.imageBackground,
          }}
        >
          {images.map((item: any, index: any) => {
            return (
              <custom.Image
                key={index}
                source={{uri: item}}
                style={{
                  width: theme.sizes.width,
                  aspectRatio: 1.07,
                }}
                resizeMode='contain'
              />
            );
          })}
        </custom.ScrollView>
      );
    };

    const renderDots = () => {
      if (images.length > 1) {
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
              marginBottom: 20,
              position: 'absolute',
              bottom: 27,
            }}
          >
            {images.map((image, index, array) => {
              return (
                <View
                  key={index}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 5 / 2,
                    backgroundColor:
                      currentSlideIndex === index
                        ? theme.colors.mainColor
                        : `${theme.colors.mainColor}20`,
                    marginHorizontal: 4,
                  }}
                />
              );
            })}
          </View>
        );
      }
      return null;
    };

    return (
      <View style={{marginBottom: 20}}>
        {renderImages()}
        {renderDots()}
      </View>
    );
  };

  const renderProductName = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 7,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <text.H3>{item.name}</text.H3>
        <product.ProductInWishlist item={item} />
      </View>
    );
  };

  const renderInStock = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
          marginBottom: 9,
        }}
      >
        <Text
          style={{
            ...theme.fonts.Lato_400Regular,
            fontSize: utils.responsiveFontSize(12),
            lineHeight: utils.responsiveFontSize(12) * 1.5,
            textTransform: 'uppercase',
            color: '#00824B',
            marginRight: 10,
          }}
        >
          in stock
        </Text>
        <product.ProductRating item={item} />
      </View>
    );
  };

  const renderPrice = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            ...theme.fonts.Lato_400Regular,
            fontSize: 20,
            color: theme.colors.mainColor,
          }}
        >
          ${item.price}
        </Text>
        <product.ProductCounterInner item={item} />
      </View>
    );
  };

  const renderColors = () => {
    const empty = colors?.length > 0;

    if (empty) {
      return (
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
            borderBottomWidth: 1,
            paddingBottom: 20,
            borderBottomColor: '#EEEEEE',
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

  const renderDescription = () => {
    return (
      <View style={{marginBottom: 40, marginHorizontal: 20}}>
        <text.H5 style={{marginBottom: 14}}>Description</text.H5>
        <text.T16>{item.description}</text.T16>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='+ ADd to cart'
        onPress={() => {
          dispatch(actions.addToCart(item));
        }}
        containerStyle={{paddingHorizontal: 20, marginBottom: 40}}
      />
    );
  };

  const renderReviews = () => {
    const slice = reviews.slice(0, 3);
    return (
      <View style={{marginHorizontal: 20, marginBottom: 20}}>
        <components.BlockHeading
          title={`Reviews (${reviews.length})`}
          onPress={() => {
            navigation.navigate('Reviews', {reviews});
          }}
          containerStyle={{marginBottom: 20}}
        />
        {slice.map((review, index, array) => {
          const lastItem = index === array.length - 1;
          return (
            <components.ReviewItem
              review={review}
              key={index}
              item={item}
              lastItem={lastItem}
            />
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView showsVerticalScrollIndicator={false}>
        {renderCarousel()}
        {renderProductName()}
        {renderInStock()}
        {renderPrice()}
        {renderColors()}
        {renderDescription()}
        {renderButton()}
        {renderReviews()}
      </custom.ScrollView>
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

export default Product;
