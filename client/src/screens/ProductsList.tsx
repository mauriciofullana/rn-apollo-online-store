import React, {FunctionComponent} from 'react';
import {useQuery} from '@apollo/client';

import {StyleSheet, FlatList} from 'react-native';
import {ProductsListNavigationProp} from '../navigation';
import {ProductData, GET_ALL_PRODUCTS, Product} from '../graphql';
import {Product as ProductComponent, Loading, Error} from '../components';

interface ProductsListProps {
  navigation: ProductsListNavigationProp;
}

const ProductsList: FunctionComponent<ProductsListProps> = () => {
  const {data, loading, error} = useQuery<ProductData>(GET_ALL_PRODUCTS, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const renderProduct = (product: Product) => {
    return <ProductComponent product={product} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.productsListContainer}
      data={data?.products}
      renderItem={(product) => renderProduct(product.item)}
    />
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  productsListContainer: {
    backgroundColor: '#fafafa',
  },
});
