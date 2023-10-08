import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';

export default function Screen(props) { // Use 'props' here
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
     <View style={props.style}> 
     {props.children} 
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, // Take the entire screen
    paddingTop: Constants.statusBarHeight,
  },
});
