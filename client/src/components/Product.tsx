import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Product as IProduct} from '../graphql';
import {BASE_URL} from '../config';

interface ProductProps {
  product: IProduct;
}

const Product: FunctionComponent<ProductProps> = ({product}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.thumb}
        source={{uri: `${BASE_URL}${product.thumb.url}`}}
      />
      <View style={styles.infoContainer}>
        <View style={styles.namePriceContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <Text style={styles.desc}>{product.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  thumb: {
    height: 300,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 16,
  },
  namePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
  },
});
