import React, {FunctionComponent} from 'react';
import {StyleSheet, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';

interface CardProps {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Card: FunctionComponent<CardProps> = ({style, children, onPress}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
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
});

export default Card;
