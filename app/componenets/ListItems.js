import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
  } from "react-native";
  import React from "react";
  import AppText from "./AppText";
  import color from "../config/color";
  
  import { GestureHandlerRootView } from "react-native-gesture-handler";
  
  import Swipeable from "react-native-gesture-handler/Swipeable";
  
  export default function ListItems(proms) {
    return (
      <GestureHandlerRootView>
        <Swipeable renderLeftActions={proms.renderLeftActions}>
          <TouchableHighlight underlayColor={color.light} onPress={proms.onPress}>
            <View style={styles.container}>
              {proms.ImageComponenets}
              {proms.image && <Image style={styles.image} source={proms.image} />}
              <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{proms.title}</AppText>
                {proms.subtitle  &&  <AppText style={styles.subtitle}>{proms.subtitle}</AppText>}
              </View>
            </View>
          </TouchableHighlight>
        </Swipeable>
      </GestureHandlerRootView>
    );
  }
  const styles = StyleSheet.create({
    image: { width: 70, height: 70, borderRadius: 35 },
    detailsContainer: { marginLeft: 30,justifyContent:"center" }, // Fixed here
    container: { flexDirection: "row", padding: 20 ,backgroundColor:color.white},
    title: { fontWeight: "500" },
    subtitle: {
      color: "#6e6969",
    },
  });
  