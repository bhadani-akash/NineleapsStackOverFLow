import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NotificationHome from "../screens/notification/NotificationHome";

const Stack = createStackNavigator();

function NotificationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotiHome"
        component={NotificationHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default NotificationStack;
