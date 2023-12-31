import React,{useEffect,useState} from 'react'
import { Text , View , StyleSheet,Image, TouchableWithoutFeedback, Alert  } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import color from '../config/color'
function AppImageInput({imageUri,onChangeImage}) {
 

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY,
      Permissions.LOCATION
    );
    }
  
 
  const handelPress=()=>{
    if(!imageUri)selectImage()
    else Alert.alert('Delete',"Wanted to delete",[{text:"Yes",onPress:()=>onChangeImage(null)},{text:"No",},])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({mediaTypes:ImagePicker.MediaTypeOptions.Images,quality:0.5,});
      if (!result.canceled) onChangeImage(result.uri);
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <TouchableWithoutFeedback onPress={handelPress}>
            <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera"size={40} color={color.medium}/>}
      {imageUri&&<Image source={{uri:imageUri}} style={styles.image}/>}
      </View>
      </TouchableWithoutFeedback>
    );
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:color.light,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:100,
  },
  image:{
    width:"100%",
    height:"100%"
  }
})
export default AppImageInput;