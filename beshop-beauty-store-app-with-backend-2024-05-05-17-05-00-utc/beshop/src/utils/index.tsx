import {useMemo, useCallback} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Clipboard from '@react-native-clipboard/clipboard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {showMessage as showMessageRN} from 'react-native-flash-message';

import {hooks} from '../hooks';
import {theme} from '../constants';
import {TagType} from '../types';
import {ProductType, CategoryType} from '../types';

export const responsive = (number: number) => {
  return {
    width: responsiveWidth(number),
    height: responsiveHeight(number),
  };
};

export const responsiveFontSize = (number: number) => {
  return RFValue(number, theme.sizes.height);
};

export const responsiveDimension = (number: number) => {
  return {
    width: responsiveWidth(number),
    height: responsiveHeight(number),
    fontSize: responsiveFontSize(number),
  };
};

export const homeIndicatorHeight = () => {
  const insets = useSafeAreaInsets();
  const {bottom} = insets;
  return bottom;
};

export const statusBarHeight = () => {
  const insets = useSafeAreaInsets();
  const {top} = insets;
  return top;
};

// RETURN QUANTITY OF ITEM IN CART OR 0
export const quantityInCart = (item: ProductType) => {
  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const ifItemInCart = cart.find((el) => el.id === item.id);
  const quantity = ifItemInCart ? ifItemInCart.quantity : 0;
  return quantity;
};

export const bgColor = (color: string) => {
  return color === 'champagne'
    ? '#F8E7CD'
    : color === 'paleCerulean'
    ? '#FFA462'
    : color === 'opal'
    ? '#67A0A4'
    : color === 'camel'
    ? '#6B6D7B'
    : color === 'squidInk'
    ? '#142535'
    : theme.colors.white;
};

// export const getAllColors = (products: ProductType[]): Array<String> => {
//   const colors = products?.map((e: any) => {
//     return e.colors;
//   });
//   const allColors = colors?.flat();
//   const uniqueColors = [...new Set(allColors)];
//   return uniqueColors;
// };

// export const getAllSizes = (products: ProductType[]): Array<String> => {
//   const sizes = products?.map((e: any) => {
//     return e.sizes;
//   });
//   const allSizes = sizes?.flat();
//   const uniqueSizes = [...new Set(allSizes)];
//   return uniqueSizes;
// };

// export const getProductsByColor = () => {
//   const products = useSelector((state: {products: {list: ProductType[]}}) => {
//     return state.products.list;
//   });
//   const color = useSelector((state: {products: {color: string}}) => {
//     return state.products.color;
//   });
//   const filteredProducts = products.filter((e) => e.colors.includes(color));
//   return filteredProducts;
// };

// export const getProductsBySize = () => {
//   const products = useSelector((state: {products: {list: ProductType[]}}) => {
//     return state.products.list;
//   });
//   const size = useSelector((state: {products: {size: string}}) => {
//     return state.products.size;
//   });
//   const filteredProducts = products.filter((e) => e.sizes.includes(size));
//   return filteredProducts;
// };

// export const getAllTags = (products: ProductType[]): Array<String> => {
//   const tags = products?.map((e: any) => {
//     return e.tags;
//   });
//   const allTags = tags?.flat();
//   const uniqueTags = [...new Set(allTags)];
//   return uniqueTags;
// };

// const productCard = (ProductCard: any) => {
//   const Wrapper = () => {
//     const products = useSelector((state: {products: {list: ProductType[]}}) => {
//       return state.products.list;
//     });
//     const color = useSelector((state: {products: {color: string}}) => {
//       return state.products.color;
//     });
//     const size = useSelector((state: {products: {size: string}}) => {
//       return state.products.size;
//     });
//     const filteredProducts = products.filter(
//       (e) => e.colors.includes(color) && e.sizes.includes(size),
//     );
//     return <ProductCard products={filteredProducts} />;
//   };

//   return Wrapper;
// };

export const updateIndex: any = (e: any, setIndex: any) => {
  const offset = e.nativeEvent.contentOffset.x;
  const index = Math.round(offset / theme.sizes.width);
  setIndex(index);
};

// SHOW FLASH MESSAGE //
export const showMessage = ({message, description, type, icon}: any) => {
  showMessageRN({
    message: message,
    description: description,
    type: type,
    icon: icon,
  });
};

export const qtyInCategory = (
  products: ProductType[],
  category: CategoryType,
): number => {
  const qty = products.filter((e) => e.categories.includes(category.name));
  return qty.length;
};

export const productsByCategory = (
  products: ProductType[],
  category: CategoryType,
): ProductType[] => {
  const filteredProducts = products.filter((e) =>
    e.categories.includes(category.name),
  );
  return filteredProducts;
};

// RANDOM COLOR FOR DISCOUNT BADGE //
export const colors = (discount: number) => {
  if (discount < 30) {
    return {
      backgroundColor: '#00824B',
    };
  }

  if (discount >= 30 && discount < 50) {
    return {
      backgroundColor: '#EF962D',
    };
  }

  if (discount >= 50) {
    return {
      backgroundColor: '#FA5555',
    };
  }
};

// COPY TO CLIPBOARD //
export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
  showMessage({
    message: 'Copied to clipboard',
    description: text,
    type: 'success',
    icon: 'success',
  });
};

export const products = (data: any) => {
  const all = data instanceof Array ? data : [];
  const featured = all?.filter((e) => e.is_featured) ?? [];
  const bestSellers = all?.filter((e) => e.is_bestseller) ?? [];

  return {all, featured, bestSellers};
};

export const query = (data: any) => {
  // if data is products
  if (data instanceof Array) {
    const all = data instanceof Array ? data : [];
    const featured = all?.filter((e) => e.is_featured) ?? [];
    const bestSellers = all?.filter((e) => e.is_bestseller) ?? [];

    return {all, featured, bestSellers};
  }
};

export const filterTags = (prev: string[], item: TagType) => {
  if (prev.includes(item.name)) {
    return prev.filter((e) => e !== item.name);
  }
  if (prev.length === 0) {
    return [item.name];
  }
  return [...prev, item.name];
};

export const utils = {
  colors,
  bgColor,
  products,
  filterTags,
  responsive,
  showMessage,
  qtyInCategory,
  quantityInCart,
  copyToClipboard,
  statusBarHeight,
  responsiveFontSize,
  productsByCategory,
  homeIndicatorHeight,
  responsiveDimension,
};
