import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import Admin from '../container/Admin';
import Category from '../container/Category';
import SubCategory from '../container/SubCategory';
import Products from '../container/Products';
import Counter from '../container/Counter';
import Posts from '../container/Posts';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{headerTitleAlign:'center'}}>
      <Drawer.Screen name='Admin' component={Admin} />
      <Drawer.Screen name='Category' component={Category} />
      <Drawer.Screen name='SubCategory' component={SubCategory} />
      <Drawer.Screen name='Products' component={Products} />
      <Drawer.Screen name='Counter' component={Counter} />
      <Drawer.Screen name='Posts' component={Posts} />
    </Drawer.Navigator>
  )
}