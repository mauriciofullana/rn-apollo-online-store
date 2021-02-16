import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Product as IProduct,
  ADD_OR_REMOVE_PRODUCT_FROM_FAVORITE,
} from '../graphql';
import {BASE_URL} from '../config';
import {FavoriteIcon, Card} from '../components';
import {ProductsListNavigationProp} from '../navigation';
import {useMutation} from '@apollo/client';

interface ProductProps {
  product: IProduct;
}

const Product: FunctionComponent<ProductProps> = ({product}) => {
  const navigation = useNavigation<ProductsListNavigationProp>();
  const [addOrRemoveProductFromFavorite] = useMutation(
    ADD_OR_REMOVE_PRODUCT_FROM_FAVORITE,
    {
      variables: {
        productId: product.id,
      },
    },
  );

  return (
    <Card
      key={product.id}
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetail')}>
      <Image
        style={styles.thumb}
        source={{uri: `${BASE_URL}${product.thumb.url}`}}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{`${product.price}`}</Text>
        <Text style={styles.desc}>{product.desc}</Text>
      </View>

      <FavoriteIcon
        favorite={product.favorite}
        onPress={async () => {
          await addOrRemoveProductFromFavorite();
        }}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
  thumb: {
    height: 300,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    marginTop: 8,
    padding: 16,
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

export default Product;
