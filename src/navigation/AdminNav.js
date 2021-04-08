import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AdminDashboard from "../components/admin/AdminDashboard";
import AdminTable from "../components/admin/AdminTable";
import AdminAnalytics from "../components/admin/AdminAnalytics";

const Stack = createStackNavigator();

function AdminNav() {
  return (
    <Stack.Navigator
      initialRouteName={"Dashboard"}
      screenOptions={{
        headerStyle: { backgroundColor: "#c1def5" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={AdminDashboard}
        options={{
          title: "Admin Statstics",
          //  headerShown: false
        }}
      />
      <Stack.Screen name="Table" component={AdminTable} />
      <Stack.Screen name="Analytics" component={AdminAnalytics} />
    </Stack.Navigator>
  );
}
export default AdminNav;
