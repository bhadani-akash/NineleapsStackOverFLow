import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/redux/store";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import AuthNav from "./src/navigation/AuthNav";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const getData = async () => {
    try {
      const checkToken = await AsyncStorage.getItem("userToken");
      // console.log("Stored token:", JSON.parse(checkToken));
      // const checkUser = await AsyncStorage.getItem("userData");
      // console.log(JSON.parse(checkUser));
      if (checkToken !== null) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    } catch (error) {
      console.log("Token retrieval Fail:", error);
    }
  };
  getData();

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          {isSignedIn ? <DrawerNavigation /> : <AuthNav />}
        </NavigationContainer>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#c1def5",
  },
});

export default App;
