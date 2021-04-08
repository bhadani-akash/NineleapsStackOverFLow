import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AppNav from "./AppNav";
import EditProfile from "../screens/EditProfile";
import ActivityScreen from "../screens/ActivityScreen";
import AdminStatistics from "../screens/AdminStatistics";
import AdminScreen from "../screens/AdminScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      //   openByDefault={false}
      initialRouteName="App"
      drawerPosition="right"
      // drawerType="slide"
    >
      <Drawer.Screen
        name="App"
        component={AppNav}
        options={{ title: "Back" }}
      />
      <Drawer.Screen
        name="Edit"
        component={EditProfile}
        options={{ title: "Edit Profile" }}
      />
      {/* <Drawer.Screen
        name="Activity"
        component={ActivityScreen}
        options={{ title: "Your Activity" }}
      /> */}
      {/* <Drawer.Screen
        name="Admin"
        component={AdminStatistics}
        options={{ title: "Admin Statistics" }}
      /> */}
      <Drawer.Screen
        name="Admin"
        component={AdminScreen}
        options={{ title: "Admin Statistics" }}
      />
      {/* <Drawer.Screen name="Logout" component={ActivityScreen} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
