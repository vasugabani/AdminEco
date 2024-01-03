import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Admin() {
  const counter = useSelector(state => state.counter);
  return (
    <View>
      <Text>{counter.count}</Text>
    </View>
  )
}