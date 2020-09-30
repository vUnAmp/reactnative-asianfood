import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { MainStackNavigator, AddProductScreen } from '../StackNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#f8f5f2',
        width: '88%',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
      // drawerContent={(props) => (
      //   <View>
      //     <Text>Hello</Text>
      //   </View>
      // )}
      initialRouteName='Home'
    >
      <Drawer.Screen name='Home' component={MainStackNavigator} />
      <Drawer.Screen name='AddProductScreen' component={AddProductScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
