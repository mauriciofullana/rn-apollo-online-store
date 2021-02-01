import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  ProductsList: undefined;
  ProductDetail: undefined;
};

export type ProductsListNavigationProp = StackNavigationProp<
  StackParamList,
  'ProductsList'
>;
