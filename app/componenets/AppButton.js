import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import color from "../config/color";

function AppButton(props) {
    console.log(props.color)
  return (
    <TouchableOpacity style={[styles.Button,{backgroundColor:props.color}]} onPress={props.onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Button: {
    
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
