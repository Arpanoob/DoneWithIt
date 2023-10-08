import { View, Text, FlatList ,StyleSheet, SafeAreaView} from 'react-native'
import React ,{useState}from 'react'

import ListItems from '../componenets/ListItems'

import Constants from 'expo-constants';
import Screen from '../componenets/Screen';
import ListItemSeprator from '../componenets/ListItemSeprator';
import ListItemDeleteAction from '../componenets/ListItemDeleteAction';
const initialMessages=[{
id:1,
title:'T1',
description:'D1'
,image:require('../assets/mosh.jpg')
}
,
{
  id:2,
  title:'T2',
  description:'D2'
  ,image:require('../assets/mosh.jpg')
  }]
export default function MessageScreen() {

const[refreshing,setRefreshing]=useState(false)

const array=useState(initialMessages);
const messages=array[0];
const setMessages=array[1];

  const handelDelete=(message)=>{
    //Delete the message from message array
     const newMessages=messages.filter((m)=>m.id!==message.id)
     setMessages(newMessages);
  }


  return (
<Screen>
<FlatList data={messages} 
KeyExtractor={messages=>messages.id.toString()}
        renderItem={({item})=><ListItems title={item.title} 
        onPress={()=>{console.log("Message Selected",item)}} 
        subtitle={item.description} 
        image={item.image} 
        renderLeftActions={()=><ListItemDeleteAction onPress={()=>{handelDelete(item)}}/>}/>}
ItemSeparatorComponent={
  <ListItemSeprator></ListItemSeprator>
}
refreshing={refreshing}
onRefresh={()=>{
  setMessages([
    {
      id:2,
      title:'T2',
      description:'D2'
      ,image:require('../assets/mosh.jpg')
    }    
  ])
}}
/>
</Screen>   
    )
}
const styles = StyleSheet.create({
    
  });
  

