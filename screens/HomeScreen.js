import React from "react";
import { Text, View } from "react-native";
import { pageStyles } from '../styles';
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={[pageStyles.screen]}>
      <Text>Home</Text>
    </View>
  );
};

HomeScreen.Icon = ({ color, size }) => (
  <FontAwesome name="home" size={size} color={color} />
);

export default HomeScreen;
