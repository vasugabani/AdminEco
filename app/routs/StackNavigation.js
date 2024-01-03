import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Admin from '../container/Admin';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Admin" component={Admin} /> */}
    </Stack.Navigator>
  )
}