// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import GoogleSSOScreen from "../screens/GoogleSSOScreen";
// import DrawerNavigation from "./DrawerNavigation";

// const Stack = createStackNavigator();

// const AuthNav = () => {
//   return (
//     <Stack.Navigator
//       independent={true}
//       headerMode={false}
//       // initialRouteName=""
//       // screenOptions={{}}
//     >
//       <Stack.Screen name="SSO" component={GoogleSSOScreen} />
//       <Stack.Screen name="MainApp" component={DrawerNavigation} />
//     </Stack.Navigator>
//   );
// };

// export default AuthNav;

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import GoogleSSOScreen from "../screens/GoogleSSOScreen";
import DrawerNavigation from "./DrawerNavigation";

const MainNavigator = createSwitchNavigator({
  Login: { screen: GoogleSSOScreen },
  MainApp: { screen: DrawerNavigation },
});

const AuthNav = createAppContainer(MainNavigator);

export default AuthNav;
