import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <FontAwesome
        name="stack-overflow"
        size={35}
        color="black"
        style={styles.logo}
      />
      <TextInput style={styles.searchInput} placeholder="Search here..." />
      <Entypo name="menu" size={35} color="black" style={styles.menu} onPress={()=>navigation.openDrawer()}/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    // backgroundColor: '#d6d6d6',
    // backgroundColor: '#fff',
  },
  logo: {
    // backgroundColor: 'pink',
  },
  searchInput: {
    // width: "75%",
    flex: 0.9,
    borderRadius: 50,
    fontSize: 16,
    backgroundColor: "#f1f2f0",
    paddingHorizontal: 15,
  },
  menu: {
    // backgroundColor: 'pink',
  },
});
