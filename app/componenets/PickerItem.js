import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.text}>
      <AppText>{props.label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    text:{padding:20}
})
export default PickerItem;
