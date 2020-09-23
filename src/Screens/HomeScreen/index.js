import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Carousel from '../../components/Carousel';

// import {createStackNavigator} from '@react-navigation/stack'
// const Stack = createStackNavigator()

const HomeScreen = ({ navigation }) => {
  console.log(Dimensions.get('window'));
  const onSignUpPress = () => {
    navigation.navigate('RegistrationScreen');
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Carousel />
      <Text>Hello 🍚</Text>
      <Button title='go to Sign Up Screen' onPress={onSignUpPress} />
    </View>
  );
};

export default HomeScreen;
