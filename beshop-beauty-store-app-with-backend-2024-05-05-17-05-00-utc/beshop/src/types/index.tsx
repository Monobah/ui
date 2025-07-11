import type {TagType} from './TagType';
import type {UserType} from './UserType';
import type {ColorType} from './ColorType';
import type {OrderType} from './OrderType';
import type {BannerType} from './BannerType';
import type {TabBarType} from './TabBarType';
import type {ReviewType} from './ReviewType';
import type {ProductType} from './ProductType';
import type {CategoryType} from './CategoryType';
import type {CarouselType} from './CarouselType';
import type {PromocodeType} from './PromocodeType';
import type {NotificationType} from './NotificationType';
import type {RootStackParamList} from './RootStackParamList';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ShopScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Shop'
>;

export type ConfirmationCodeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ConfirmationCode'
>;

export type SignUpAccountCreatedScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpAccountCreated'
>;

export type ConfirmationCodeEmailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ConfirmationCodeEmail'
>;

export type NewPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'NewPassword'
>;

export type VerifyPhoneNumberScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'VerifyPhoneNumber'
>;

export type ProductScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Product'
>;

export type ReviewsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Reviews'
>;

export type CheckoutScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Checkout'
>;

export type {
  TagType,
  UserType,
  ColorType,
  OrderType,
  TabBarType,
  ReviewType,
  BannerType,
  ProductType,
  CategoryType,
  CarouselType,
  PromocodeType,
  NotificationType,
  RootStackParamList,
};
