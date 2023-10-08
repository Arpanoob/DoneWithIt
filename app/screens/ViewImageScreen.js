import React from 'react';
import { Image ,StyleSheet, View, ViewComponent} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/color'

function ViewImageScreen(props) {
    return (

    <View styles={styles.container}>

    <View style={styles.closeIcon}>
    <MaterialCommunityIcons name='close' color='#000' size={30}></MaterialCommunityIcons>
    </View>
    <View style={styles.deleteIcon}>
    <MaterialCommunityIcons name='trash-can-outline' color='#000' size={30}></MaterialCommunityIcons>
    </View>

    <Image resizeMode='contain'style={styles.image} source={require("../assets/chair.jpg")}/>
    </View>

        );
}
const styles = StyleSheet.create({
    
  container:{backgroundColor:'#000',width:"100%",height:"100%",flex:1,}   ,
  closeIcon:{position:'absolute' , top:30,left:40},
    deleteIcon:{position:'absolute' , top:30,right:40},

  image:{width:"100%",height:"100%"}
})
export default ViewImageScreen;