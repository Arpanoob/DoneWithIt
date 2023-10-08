import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../componenets/Screen"; // Corrected the import path
import ListItems from "../componenets/ListItems"; // Corrected the import path
import Icon from "..//componenets/Icon"; // Corrected the import path
import color from "../config/color";
import ListItemSeparator from "../componenets/ListItemSeprator";
import AuthContext from "../auth/context"; // Import the AuthContext from your authentication context file
import AuthStorage from '../auth/storage'


const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: color.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: color.secondary,
    },
    targetScreen:"Messages"
  },
];

function AccountScreen(props) {
  const {user,setUser}=useContext(AuthContext);
  
  const handelLogout=()=>{
    setUser(null);
    AuthStorage.removeToken();
  }



  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title={user.name}
          subtitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              ImageComponenets={
                // Corrected ImageComponents
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={()=>props.navigation.navigate(item.targetScreen)}
            />
          )}
        ></FlatList>
      </View>
      <View>
        <ListItems title="Log Out" onPress={handelLogout} ImageComponenets={<Icon name="logout" backgroundColor="#ffe66d" />} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // Corrected container name
    marginVertical: 20,
  },
  screen: {
    backgroundColor: color.light,
  },
});

export default AccountScreen;
