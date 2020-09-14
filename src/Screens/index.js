import React from "react";
import { View, Text, Button } from 'react-native'
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Registration from "./RegistrationScreen";

import mainStyles from '../Styles/mainStyles'

const Screens = ({ navigation }) => {
  return (
    <View style={mainStyles.container}>
      <Text>Hello from Screens Okey???</Text>
      <Button title='go to Login Screen' onPress={() => navigation.navigate('LoginScreen', {
        itemId: (Math.random() * 100).toFixed(2),
        quote: 'Hello ! It\'s me you are looing for',
        name: 'Here is Title von LoginScreen'
      })} />
      <Button title='go to Image Screen' onPress={() => navigation.navigate('ImageScreen')} />
      <Button title='go to AddProduct Screen' onPress={() => navigation.navigate('AddProductScreen')} />
    </View>
  )

};

export default Screens;
