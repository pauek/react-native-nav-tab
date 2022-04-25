import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import UserScreen from "./screens/UserScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
      >
        <Tab.Screen
          name="user"
          component={UserScreen}
          options={{ tabBarIcon: UserScreen.Icon }}
        />
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{ tabBarIcon: HomeScreen.Icon }}
        />
        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={{ tabBarIcon: SettingsScreen.Icon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
