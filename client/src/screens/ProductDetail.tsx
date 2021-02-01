import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Text>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
