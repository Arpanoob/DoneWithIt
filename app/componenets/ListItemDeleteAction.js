import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import color from '../config/color';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ListItemDeleteAction(proms) {
  return (
    <TouchableWithoutFeedback onPress={proms.onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color={"#fff"} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    width: 70,
    height: "100%",
    justifyContent: "center", // Corrected "justfyContent" to "justifyContent"
    alignItems: "center",
  },
});
