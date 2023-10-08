import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/color"; // Assuming you have a 'colors.js' file
import { useRoute } from "@react-navigation/native";

function AppCard(props) {
  console.log("props.image:", props.image); // Add this line for debugging
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:(props.imageUrl)}} />
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{props.title}</AppText>
          <AppText style={styles.subtitle}>{props.subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    // Numeric value without quotes
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    frontWeight: "bold",
  },
});

export default AppCard;
