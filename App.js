import { Text, View } from 'react-native'
import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './app/routs/StackNavigation'
import DrawerNavigation from './app/routs/DrawerNavigation';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </Provider>
    )
  }
}