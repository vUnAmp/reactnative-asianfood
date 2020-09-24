import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Carousel from '../../components/Carousel';
import firebase from '../../firebase/config';

import mainStyles from '../../Styles/mainStyles';
// import styles from '../LoginScreen/styles';

// import {createStackNavigator} from '@react-navigation/stack'
// const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

const HomeScreen = ({ navigation }) => {
  // console.log(Dimensions.get('window'));
  const onSignUpPress = () => {
    navigation.navigate('RegistrationScreen');
  };
  const [products, setProducts] = useState([]);
  const [totalPay, setTotalPay] = useState(0);
  const Product = ({ title, description, price }) => {
    const addItem = () => {
      setTotalPay(totalPay + parseFloat(price));
      console.log(totalPay);
    };
    return (
      <View style={mainStyles.wrapProduct}>
        <Text style={mainStyles.title}>{title}</Text>
        <Text style={mainStyles.description}>{description}</Text>
        {/* <View style={mainStyles.wrapPrice}> */}
        <Text style={mainStyles.price}>{price} € </Text>
        <Text style={mainStyles.addItem} onPress={addItem} title='+'>
          +
        </Text>

        {/* </View> */}
      </View>
    );
  };
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

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginTop: 50 }}>
            <Carousel navigation={navigation} />

            <View style={styles.mainContent}>
              <Text style={styles.brandTitle}>Bamboo Bistro</Text>
              <Text style={styles.brandDescription}>
                Healthy and fresh food{' '}
              </Text>
            </View>
          </View>
        }
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.price + Math.random()}
      />
      {totalPay > 0 ? (
        <TouchableOpacity
          onPress={() => alert('FAB clicked')}
          style={{
            position: 'absolute',
            width: '100%',
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            right: 20,
            bottom: 20,
            backgroundColor: '#03A9F4',
            borderRadius: 30,
            elevation: 8,
          }}
        >
          <Text style={{ fontSize: 40, color: 'white' }}>
            {' '}
            totalPay : {totalPay}{' '}
          </Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContent: {
    width: '98%',
    // height: '100%',
    alignSelf: 'center',
    backgroundColor: 'deeppink',
    padding: 10,
    // paddingTop: 50,
  },
  brandTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  brandDescription: {
    fontSize: 14,
  },
});
