import { View,  StyleSheet } from 'react-native';
import React from 'react';
import Text from '../componenets/AppText';
import ListItem from '../componenets/ListItems';

import {
  KeyboardAvoidingView,
  Platform,
  
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/color";
import ContactSellerForm from "../componenets/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.item.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.item.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.item.title}</Text>
        <Text style={styles.price}>${listing.item.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subtitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: -10,
  },
});
export default ListingDetailsScreen;
