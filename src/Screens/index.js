import React from "react";
import { View, Text, Button } from 'react-native'
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Registration from "./RegistrationScreen";

import { mainStyles } from '../Styles/mainStyles'
import Svg, {
  Circle,
  Ellipse,
  G,

  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
const markerRendering = `<Svg width="200" height="60">
<Rect
  x="25"
  y="5"
  width="150"
  height="50"
  fill="rgb(0,0,255)"
  strokeWidth="3"
  stroke="rgb(0,0,0)"
/>
</Svg>`;

const Screens = ({ navigation }) => {
  return (
    <View style={mainStyles.container}>
      <Text>Hello from Screens Okey???</Text>
      <Button title='go to Login Screen' onPress={() => navigation.navigate('LoginScreen', {
        itemId: (Math.random() * 100).toFixed(2),
        quote: 'Hello ! It\'s me you are looing for',
        name: 'Here is Title von LoginScreen'
      })} />
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Rect
          x="15"
          y="15"
          rx='2'
          width="20"
          height="0.01"
          stroke="black"
          strokeWidth="0.81"
          fill="black"
        />
      </Svg>
    </View>
  )

};

export default Screens;
