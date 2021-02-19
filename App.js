/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Badge from "./src/components/Badge";
import Header from "./src/components/Header";
import UserDetails from "./src/components/UserDetails";
import UserTagsSubscriptions from "./src/components/UserTagsSubscriptions";
import UserTopQuestionAnswer from "./src/components/UserTopQuestionAnswer";
import UserTotalVotesQuestionAnswer from "./src/components/UserTotalVotesQuestionAnswer";
import GoogleSSOScreen from "./src/screens/GoogleSSOScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MyProfileScreen from "./src/screens/MyProfileScreen";
import TagScreen from "./src/screens/TagScreen";
import SwitchNavigation from "./src/navigation/SwitchNavigation";
import DrawerNavigation from "./src/navigation/DrawerNavigation";

const App = () => {
  return (
    // <StatusBar barStyle="dark-content" />
    <View style={styles.Container}>
      {/* <Text>Hello</Text> */}
      {/* <UserDetails /> */}
      {/* <Badge /> */}
      {/* <UserTotalVotesQuestionAnswer /> */}
      {/* <UserTopQuestionAnswer /> */}
      {/* <UserTagsSubscriptions /> */}
      {/* <GoogleSSOScreen /> */}
      {/* <Header /> */}
      {/* <NavigationContainer>
        <TabNavigator /> */}
      {/* <DrawerNavigation /> */}
      {/* </NavigationContainer> */}
      <DrawerNavigation />
      {/* <SwitchNavigation /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#c1def5",
  },
});

export default App;
