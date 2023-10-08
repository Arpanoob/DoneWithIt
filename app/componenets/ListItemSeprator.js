import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import color from '../config/color';

export default function ListItemSeparator() {
  return (
    <View style={styles.separator}></View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1, 
    backgroundColor: color.light,
  },
});
