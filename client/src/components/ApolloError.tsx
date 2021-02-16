import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ApolloError} from '@apollo/client';

interface ErrorPros {
  error: ApolloError | undefined;
}

const ApolloErrorComponent: FunctionComponent<ErrorPros> = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{error?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ApolloErrorComponent;
