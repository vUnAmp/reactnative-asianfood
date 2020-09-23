import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator, AddProductScreen } from '../StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={MainStackNavigator} />
      <Drawer.Screen name='Add Product Screen' component={AddProductScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
