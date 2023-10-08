import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../componenets/ActivityIndicator";
import Button from "../componenets/AppButton";
import Card from "../componenets/AppCard";
import colors from "../config/color";
import listingsApi from "../api/Listings";
import routes from "../navigation/routes";
import Screen from "../componenets/Screen";
import AppText from "../componenets/Text";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
    <ActivityIndicator visible={getListingsApi.loading} />
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <React.Fragment>
        <AppText>Couldn't retrieve the listings.</AppText>
        <Button title="Retry" onPress={getListingsApi.request} />
        </React.Fragment>
      )}
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, {item:item})}
          />
        )}
        showsVerticalScrollIndicator={false} 
      />
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 20,paddingRight:20,top:5,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
