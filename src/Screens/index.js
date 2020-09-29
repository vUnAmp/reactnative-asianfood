import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Text, Button } from 'react-native';
import HomeScreen from './HomeScreen';

import mainStyles from '../Styles/mainStyles';

import firebase from '../firebase/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
// NavigationContainer

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Product = ({ title, description, price }) => (
  <View style={mainStyles.wrapProduct}>
    <Text style={mainStyles.title}>{title}</Text>
    <Text style={mainStyles.description}>{description}</Text>
    {/* <View style={mainStyles.wrapPrice}> */}
    <Text style={mainStyles.price}>{price} € </Text>
    <Text
      style={mainStyles.addItem}
      onPress={() => console.log('hello')}
      title='+'
    >
      +
    </Text>

    {/* </View> */}
  </View>
);

const Screens = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productList = [];
    const fetchData = () =>
      firebase
        .firestore()
        .collection('products')
        .get()
        .then((datas) => {
          datas.forEach((data) => {
            productList.push(data.data());
          });
          setProducts(productList);
        })
        .catch((error) => {
          console.log(error);
        });

    fetchData();
  }, []);
  const renderItem = ({ item }) => (
    <Product
      title={item.title}
      price={item.price}
      description={item.description}
    />
  );

  console.log(products);

  return (
    <View style={mainStyles.container}>
      <Text>Hello from Screens Okey???</Text>
      <Button
        title='go to Login Screen'
        onPress={() =>
          navigation.navigate('LoginScreen', {
            itemId: (Math.random() * 100).toFixed(2),
            quote: "Hello ! It's me you are looing for it",
            name: 'Here is Title von LoginScreen',
          })
        }
      />
      <Button
        title='go to Image Screen'
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button
        title='go to AddProduct Screen'
        onPress={() => navigation.navigate('AddProductScreen')}
      />
      <SafeAreaView>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.price + Math.random()}
        />
      </SafeAreaView>
    </View>
  );
};

export default Screens;
