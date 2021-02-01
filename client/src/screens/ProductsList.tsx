import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ProductsListNavigationProp} from '../navigation';

interface ProductsListProps {
  navigation: ProductsListNavigationProp;
}

const ProductsList: FunctionComponent<ProductsListProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ProductsList</Text>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('ProductDetail');
        }}
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
