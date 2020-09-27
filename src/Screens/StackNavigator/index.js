import React from 'react';
import { View, TouchableOpacity, Button, Text } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../LoginScreen';
import RegistrationScreen from '../RegistrationScreen';
import AddProductScreen from '../AddProductScreen';
import HomeScreen from '../HomeScreen';
import styles from './styles';
import { StackActions } from '@react-navigation/native';
import CheckoutScreen from '../CheckoutScreen';

const Stack = createStackNavigator();

const AddproductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='AddProductScreen' component={AddProductScreen} />
    </Stack.Navigator>
  );
};
const Brand = () => {
  return <View style={styles.textBrand}>Berlin</View>;
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
      }}
    >
      {/* <Stack.Screen name='AddProductScreen' component={AddProductScreen} /> */}
      <Stack.Screen
        name='HomeScreen'
        options={{
          title: 'AsianBistro',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#202125',
          },

          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => (
            <View>
              <Text style={styles.textBrand}>Berlin</Text>
            </View>
          ),

          headerLeft: () => (
            <TouchableOpacity
              onPress={
                () => navigation.openDrawer()
                // <View> <Text>Hello</Text>  </View>
              }
              title='hello'

              // color='rgba(0,0,0,0.1)'
            >
              <View style={{ width: 50, height: 50 }}>
                <Svg height='100%' width='100%' viewBox='0 4 100 100'>
                  <Rect
                    x='20'
                    y='40'
                    rx='2'
                    width='50'
                    height='4.01'
                    stroke='#fd4900'
                    strokeWidth='1.81'
                    fill='#fd4900'
                  />
                  <Rect
                    x='20'
                    y='55'
                    rx='2'
                    width='50'
                    height='4.01'
                    stroke='#fd4900'
                    strokeWidth='1.81'
                    fill='#fd4900'
                  />
                  <Rect
                    x='20'
                    y='70'
                    rx='2'
                    width='50'
                    height='4.01'
                    stroke='#fd4900'
                    strokeWidth='1.81'
                    fill='#fd4900'
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          ),
        }}
        component={HomeScreen}
      />

      <Stack.Screen
        name='CheckoutScreen'
        options={{
          title: 'Checkout',
          headerTitleStyle: {
            fontSize: 14,
            color: '#009de0',
          },
          headerTintColor: '#fd4900',
        }}
        component={CheckoutScreen}
      />
      <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, AddProductScreen };
