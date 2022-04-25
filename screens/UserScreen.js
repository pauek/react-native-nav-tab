import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { pageStyles } from '../styles';
import { AntDesign } from '@expo/vector-icons';

const UserScreen = () => {
  return (
    <View style={[pageStyles.screen, styles.red]}>
      <Text>User Screen</Text>
    </View>
  )
}

UserScreen.Icon = ({ color, size }) => (
  <AntDesign name="user" color={color} size={size} />
)

export default UserScreen

const styles = StyleSheet.create({
  red: {
    backgroundColor: '#f33'
  }
})
