import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import firebase from "./src/firebase/config";

// const Favicon = require("./assets/favicon.png");
import Favicon from "./assets/favicon.png";
import Screens from "./src/Screens/";
import LoginScreen from "./src/Screens/LoginScreen";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import ImageScreen from "./src/Screens/ImageScreen";
import AddProductScreen from "./src/Screens/AddProductScreen";

import LogoImage from "./assets/favicon.png";

//SVG React-native

//Yellow warning
import { YellowBox } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
YellowBox.ignoreWarnings(["Setting a timer"]);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LogoTitle = () => {
  return <Image style={{ width: 150, height: 50 }} source={LogoImage} />;
};
import Svg, { Rect } from "react-native-svg";
import HomeScreen from "./src/Screens/HomeScreen";
import DrawerNavigator from "./src/Screens/DrawNavigator";

export default function App() {
  const [loading, setLoading] = useState("");
  const [user, setUser] = useState("");

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
      <DrawerNavigator />
    </NavigationContainer>
  );
}
