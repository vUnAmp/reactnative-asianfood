import 'react-native-gesture-handler'

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import firebase from './src/firebase/config'

// const Favicon = require("./assets/favicon.png");
import Favicon from "./assets/favicon.png";
import Screens from './src/Screens/'
import LoginScreen from './src/Screens/LoginScreen'
import RegistrationScreen from './src/Screens/RegistrationScreen';
import ImageScreen from './src/Screens/ImageScreen'
import AddProductScreen from './src/Screens/AddProductScreen'

import LogoImage from './assets/favicon.png'

//SVG React-native

//Yellow warning 
import { YellowBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
YellowBox.ignoreWarnings(['Setting a timer']);


const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 150, height: 50 }}
      source={LogoImage}
    />
  )
}
import Svg, { Rect } from 'react-native-svg';

export default function App() {
  const [loading, setLoading] = useState('')
  const [user, setUser] = useState('')


  // useEffect(() => {
  //   const usersRef = firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       usersRef.doc(user.uid).get().then(docs => {
  //         const userData = docs.data()
  //         setUser(userData)
  //       })
  //     } else {
  //       setLoading(false)
  //     }
  //   })

  // }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontSize: 20
          },

        }}

      >
        <Stack.Screen name="LoginScreen" component={LoginScreen}
          options={{
            // title: 'This is Login Screen',
            headerTitle: 'Hello from Login Screen',
            headerStyle: {
              backgroundColor: '#fff'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontStyle: "italic",
              fontWeight: '600',
              fontSize: 16
            }

          }}
        />
        <Stack.Screen name="HomeScreen" component={Screens} options={
          {
            headerStyle: {
              backgroundColor: 'orange',

            },
            headerTitleStyle: {
              alignSelf: 'center'
            },
            // headerLeft: () => (<Text>Hello</Text>),
            title: 'Home Screen Title',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => (
                  <View> <Text>Hello</Text>  </View>
                )}
                title='hello'


              // color='rgba(0,0,0,0.1)'
              >
                <View style={{ width: 50, height: 50, }} >
                  <Svg height="100%" width="100%" viewBox="0 4 100 100">
                    <Rect
                      x="20"
                      y="40"
                      rx='2'
                      width="60"
                      height="4.01"
                      stroke="white"
                      strokeWidth="1.81"
                      fill="white"
                    />
                    <Rect
                      x="20"
                      y="55"
                      rx='2'
                      width="60"
                      height="4.01"
                      stroke="white"
                      strokeWidth="1.81"
                      fill="white"
                    />
                    <Rect
                      x="20"
                      y="70"
                      rx='2'
                      width="60"
                      height="4.01"
                      stroke="white"
                      strokeWidth="1.81"
                      fill="white"
                    />
                  </Svg>

                </View>

              </TouchableOpacity>
            ),

          }} />
        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} options={{ title: 'Registration Screen' }} />
        <Stack.Screen name='ImageScreen' component={ImageScreen} options={{ title: 'Image from Firebase' }} />
        <Stack.Screen name='AddProductScreen' component={AddProductScreen} options={{ title: 'Add product' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
