import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ActivityScreen from "../screens/ActivityScreen";
import EditProfile from "../screens/EditProfile";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        openByDefault={false}
        /* initialRouteName="edit"*/
        drawerPosition="right"
      >
        <Drawer.Screen name="Back" component={TabNavigator} />
        <Drawer.Screen name="Edit Profile" component={EditProfile} />
        <Drawer.Screen name="Activity" component={ActivityScreen} />
        <Drawer.Screen name="Admin Stats" component={ActivityScreen} />
        <Drawer.Screen name="Logout" component={ActivityScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNavigation;
