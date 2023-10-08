import { View, Text,StyleSheet, Platform } from 'react-native'
import React from 'react'
import color from '../config/color'

import defaultStyles from "../config/styles"

const AppText = (proms) => {
  return (
    
      <Text  style={[defaultStyles,styles.text,proms.style]}>{proms.children}</Text>
    
  )
}
const styles = StyleSheet.create({
    text:{fontSize:20,color:color.primary}
})

export default AppText