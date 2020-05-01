import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/index";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
