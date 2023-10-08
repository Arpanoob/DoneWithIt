import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../componenets/AppButton";
import color from "../config/color";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.backgrund}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you do not need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton color={color.secondary} onPress={()=>props.navigation.navigate("Login")}>Login</AppButton>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton color={color.primary}  onPress={()=>props.navigation.navigate("Register")}>Register</AppButton>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgrund: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  logo: { width: 100, height: 100 },
  buttonContainer: { padding: 20, width: "100%" },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  tagline:{fontSize:25,fontWeight:"600",paddingVertical:"20"}
});

export default WelcomeScreen;
