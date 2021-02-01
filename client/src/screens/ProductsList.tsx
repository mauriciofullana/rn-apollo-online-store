import React, {FunctionComponent} from 'react';
import {useQuery} from '@apollo/client';

import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ProductsListNavigationProp} from '../navigation';
import {ProductData, GET_ALL_PRODUCTS} from '../graphql';

interface ProductsListProps {
  navigation: ProductsListNavigationProp;
}

const ProductsList: FunctionComponent<ProductsListProps> = ({navigation}) => {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.products}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
