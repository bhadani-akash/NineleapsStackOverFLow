import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FontAwesome
        // name="stack-overflow"
        name="book"
        // name="angellist"
        // name="grav"
        // name="eercast"
        size={35}
        color="black"
        style={styles.logo}
      />
      {/* <Image
        source={require("../assets/logo.jpg")}
        style={styles.logoImage}
        resizeMode="center"
      /> */}
      {/* <TextInput style={styles.searchInput} placeholder="Search here..." /> */}
      <SearchBar />
      <Entypo
        name="menu"
        size={35}
        color="black"
        style={styles.menu}
        onPress={() => navigation.openDrawer()}
      />
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
    height: 70,
    width: "100%",
    backgroundColor: "#c1def5",
    // backgroundColor: "#d6d6d6",
    // backgroundColor: '#fff',
  },
  logo: {
    // backgroundColor: 'pink',
  },
  logoImage: {
    height: 35,
    width: 35,
  },
  searchInput: {
    // width: "75%",
    flex: 0.9,
    borderRadius: 50,
    fontSize: 16,
    backgroundColor: "#f1f2f0",
    // backgroundColor: "#d6d6d6",
    paddingHorizontal: 15,
  },
  menu: {
    // backgroundColor: 'pink',
  },
});
