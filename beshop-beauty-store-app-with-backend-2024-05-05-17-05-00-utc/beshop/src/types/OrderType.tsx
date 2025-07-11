import {ProductType} from './ProductType';

export type OrderType = {
  products: ProductType[];
  subtotal: string;
  discount: number;
  total: string;
  delivery: string;
};
