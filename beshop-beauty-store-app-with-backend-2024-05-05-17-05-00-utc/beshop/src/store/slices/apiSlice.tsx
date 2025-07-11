import {
  BASE_URL,
  GET_TAGS,
  GET_COLORS,
  GET_BANNERS,
  GET_PRODUCTS,
  GET_CAROUSEL,
  GET_CATEGORIES,
  GET_PROMOCODES,
  AUTHORIZATION_TOKEN,
} from '../../config';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {
  TagType,
  ColorType,
  BannerType,
  ProductType,
  CategoryType,
  CarouselType,
} from '../../types';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${AUTHORIZATION_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<{products: ProductType[]}, void>({
      query: () => GET_PRODUCTS,
    }),
    getBanners: builder.query<{banners: BannerType[]}, void>({
      query: () => GET_BANNERS,
    }),
    getCarousel: builder.query<{carousel: CarouselType[]}, void>({
      query: () => GET_CAROUSEL,
    }),
    getCategories: builder.query<{categories: CategoryType[]}, void>({
      query: () => GET_CATEGORIES,
    }),
    getTags: builder.query<{tags: TagType[]}, void>({
      query: () => GET_TAGS,
    }),
    // getProductsByTag: builder.query<{products: ProductType[]}, string>({
    //   query: (tag) => `${ENDPOINTS.GET.getProducts}?tag=${tag}`,
    // }),
    // getProductsByCategory: builder.query<{products: ProductType[]}, string>({
    //   query: (category) => `${ENDPOINTS.GET.getProducts}?category=${category}`,
    // }),
    // getProductsBySearch: builder.query<{products: ProductType[]}, string>({
    //   query: (search) => `${ENDPOINTS.GET.getProducts}?search=${search}`,
    // }),
    getColors: builder.query<{colors: ColorType[]}, void>({
      query: () => GET_COLORS,
    }),
    getPromocodes: builder.query<{promocodes: any[]}, void>({
      query: () => GET_PROMOCODES,
    }),
    refresh: builder.mutation<void, void>({
      query: () => 'refresh',
    }),
    refreshControl: builder.mutation<void, void>({
      // query: () => 'refresh',
      // refresh all data
      query: () => {
        return {
          url: '/refresh',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetTagsQuery,
  useGetColorsQuery,
  useGetBannersQuery,
  useGetProductsQuery,
  useGetCarouselQuery,
  useGetCategoriesQuery,
  useGetPromocodesQuery,
  // useGetProductsByTagQuery,
  useRefreshMutation, // что он делает? зачем он нужен? как он работает? как его использовать? какие у него есть параметры?
  // ответы на эти вопросы можно найти в документации: https://redux-toolkit.js.org/rtk-query/usage/mutations
} = apiSlice;

// export const queryHooks = {
//   useGetTagsQuery,
//   useGetColorsQuery,
//   useGetBannersQuery,
//   useGetProductsQuery,
//   useGetCarouselQuery,
//   useGetPromocodesQuery,
//   useGetCategoriesQuery,
//   // useGetProductsByTagQuery,
// };

export default apiSlice.reducer;
