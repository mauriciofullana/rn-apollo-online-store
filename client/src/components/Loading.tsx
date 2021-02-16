import React, {FunctionComponent} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

const Loading: FunctionComponent = () => {
  return <ActivityIndicator style={styles.loadingIndicator} />;
};

export default Loading;

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
});
