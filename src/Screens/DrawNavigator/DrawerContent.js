import React from 'react';
import { View, StyleSheet } from 'react-native';

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
import { database } from 'firebase';

const DrawerContent = (props) => {
  const { data } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={drawerStyles.container}>
        <View style={drawerStyles.brand}>
          <Text style={drawerStyles.title}>AsianBistro</Text>
          <Text style={drawerStyles.description}>
            Leker, Gesund und Schnell{' '}
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
