import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import TagScreen from "../screens/TagScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import AskAQuestionLabel from "../components/homeFeed/AskAQuestionLabel";

import NotificationStack from "./NotificationStack";

const Tab = createBottomTabNavigator();

const AppNav = () => {
  return (
    <Tab.Navigator
      independent={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Tags") {
            iconName = focused ? "pricetag" : "pricetag-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          // else if (route.name === "Search") {
          //   iconName = focused ? "search" : "search-outline";
          // }
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "#c1def5",
          // padding: 5,
          // paddingVertical: 20,
          // flex: 0.07,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tags" component={TagScreen} />
      {/* <Tab.Screen name="Search" component={AskAQuestionLabel} /> */}
      {/* <Tab.Screen name="Notification" component={NotificationScreen} /> */}
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Profile" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};
export default AppNav;
