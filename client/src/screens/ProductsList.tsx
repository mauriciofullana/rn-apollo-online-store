import React, {FunctionComponent} from 'react';
import {useQuery} from '@apollo/client';

import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ProductsListNavigationProp} from '../navigation';
import {ProductData, GET_ALL_PRODUCTS, Product} from '../graphql';
import {Product as ProductComponent} from '../components/Product';

interface ProductsListProps {
  navigation: ProductsListNavigationProp;
}

const ProductsList: FunctionComponent<ProductsListProps> = () => {
  const {data, loading, error} = useQuery<ProductData>(GET_ALL_PRODUCTS);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error while loading products...</Text>
      </View>
    );
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
