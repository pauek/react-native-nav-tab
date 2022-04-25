import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { pageStyles } from '../styles';

const SettingsScreen = () => {
  return (
    <View style={[pageStyles.screen, styles.red]}>
      <Text>Settings Screen</Text>
    </View>
  )
};

SettingsScreen.Icon = ({ color, size }) => (
  <Ionicons name="md-settings" color={color} size={size} />
);

export default SettingsScreen;

const styles = StyleSheet.create({
  red: {
    backgroundColor: '#33f'
  }
})
