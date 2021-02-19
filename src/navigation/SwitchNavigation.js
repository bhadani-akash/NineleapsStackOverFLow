import { createAppContainer, createSwitchNavigator } from "react-navigation";

import GoogleSSOScreen from "../screens/GoogleSSOScreen";
import AppScreens from "../screens/AppScreens";

const MainNavigator = createSwitchNavigator({
  Login: { screen: GoogleSSOScreen },
  App: { screen: AppScreens },
});

const SwitchNavigation = createAppContainer(MainNavigator);

export default SwitchNavigation;
