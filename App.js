import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { mainStyles } from "./Styles/mainStyles";
// const Favicon = require("./assets/favicon.png");
import Favicon from "./assets/favicon.png";

export default function App() {
  const handleClick = () => {
    console.log("just clicking");
  };
  return (
    <View style={mainStyles.container}>
      <Text style={mainStyles.text}>The first line from VSCode</Text>
      <Button onPress={handleClick} title="Press me" />
      <Image source={Favicon} style={{ width: 80, height: 40 }} />
      <Text> Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}
