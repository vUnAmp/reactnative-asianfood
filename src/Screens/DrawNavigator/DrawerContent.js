import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {
  userCheckInfo,
  userSignInWithEmailandPassword,
} from '../../redux/User/user.action';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Button,
} from 'react-native-paper';
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';
import drawerStyles from './drawerStyles.js';

import firebase from '../../firebase/config';

const mapState = ({ user, store }) => ({
  currentUser: user.currentUser,
  oderDetails: store.oderDetails,
  userInfo: user.userInfo,
});

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  const { currentUser, oderDetails, userInfo } = useSelector(mapState);

  const { data } = props;
  // console.log(props);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(userSignInWithEmailandPassword());
        console.log(userAuth.uid);
        firebase
          .firestore()
          .collection('users')
          .doc(userAuth.uid)
          .get()
          .then((data) => {
            return data.data();
          })
          .then((data) => {
            dispatch(userCheckInfo(data));
          })
          .catch((err) => console.log(err));
      } else {
        console.log('user is not Online hecked');
      }
    });
    // return () => {
    //   cleanup;
    // };
  }, []);
  // console.log(userInfo);
  return (
    <DrawerContentScrollView {...props}>
      <View style={drawerStyles.container}>
        <View style={drawerStyles.brand}>
          <Text style={drawerStyles.title}>AsianBistro</Text>
          <Text style={drawerStyles.description}>
            Leker, Gesund und Schnell
          </Text>
        </View>
        <View style={drawerStyles.close}>
          <AntDesign
            name='close'
            size={20}
            color='#404040'
            onPress={() => {
              props.navigation.closeDrawer();
            }}
          />
        </View>

        {currentUser ? (
          <View>
            <Text>Hello</Text>
            <Text> {userInfo.fullName} </Text>
          </View>
        ) : (
          <View style={drawerStyles.userSection}>
            <Button
              mode='outlined'
              color='#009de0'
              labelStyle={{
                fontSize: 11,
                textAlignVertical: 'center',
              }}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('LoginScreen');
              }}
            >
              Sign In
            </Button>
            <Button
              mode='contained'
              color='#009de0'
              contentStyle={
                {
                  // marginLeft: 130,
                }
              }
              labelStyle={{
                fontSize: 11,
                textAlignVertical: 'center',
              }}
              onPress={() => {
                props.navigation.closeDrawer();
                props.navigation.navigate('RegistrationScreen');
              }}
            >
              Create Account
            </Button>
          </View>
        )}

        <Drawer.Section>
          <DrawerItem
            style={{
              paddingLeft: 12,
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              marginBottom: 1,
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name='cart-outline'
                color='#404040'
                size={20}
              />
            )}
            label='Your Cart'
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('CheckoutScreen');
            }}
          />
          <DrawerItem
            style={{
              paddingLeft: 12,
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              marginBottom: 1,
            }}
            icon={({ color, size }) => (
              <MaterialIcons name='restaurant-menu' size={20} color='#404040' />
            )}
            label='Menu'
            onPress={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('HomeScreen');
            }}
          />
          <DrawerItem
            style={{
              paddingLeft: 12,
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              marginBottom: 1,
            }}
            icon={({ color, size }) => (
              <AntDesign name='team' size={20} color='#404040' />
            )}
            label='About Us'
            onPress={() => {}}
          />
          <DrawerItem
            style={{
              paddingLeft: 12,
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              marginBottom: 1,
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name='contact-phone-outline'
                color='#404040'
                size={20}
              />
            )}
            label='Contact'
            onPress={() => {}}
          />
        </Drawer.Section>
        <View style={drawerStyles.logo}>
          <Avatar.Image
            size={100}
            source={require('../../../assets/logopl.png')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
