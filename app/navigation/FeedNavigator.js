import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingScreen";
import ListDetailsScreen from "../screens/ListDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false}}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails"  component={ListDetailsScreen} options={{ headerShown: false ,  gestureEnabled: true,}}/>
  </Stack.Navigator>
);

export default FeedNavigator;
