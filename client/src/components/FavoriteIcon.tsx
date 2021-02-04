import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export const FavoriteIcon: FunctionComponent = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Svg
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    top: 264,
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
