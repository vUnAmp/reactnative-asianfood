import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'

import firebase from '../../firebase/config'
//Disable warning setting a timer
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);




const RegistrationScreen = ({ navigation }) => {

  const [fullName, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const onFooterLinkPress = () => {
    navigation.navigate('LoginScreen')
  }
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert('confirm password not match')
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          const uid = res.user.uid
          const data = {
            id: uid,
            email,
            fullName
          };
          const usersRef = firebase.firestore().collection('users')
          usersRef.doc(uid)
            .set(data).then(() => {
              navigation.navigate('HomeScreen', { user: data })
            })
            .catch((error) => {
              console.log(error)
            })


        })
        .catch((error) => {
          console.log(error)
        })

    }

  }
  return (
    <View style={styles.container} >
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps='always'
      >
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <TextInput
          style={styles.input}
          placeholder='Your name'
          onChangeText={text => setFullname(text)}

          value={fullName}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder='E-mail'
          onChangeText={text => setEmail(text)}

          value={email}
          // textContentType='emailAddress'
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry

        />
        <TextInput
          style={styles.input}
          placeholder='Confirm password'
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry

        />
        <TouchableOpacity
          style={styles.button}
          onPress={onRegisterPress}
        >

          <Text
            style={styles.buttonTitle}
          > Registration </Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Already got an account?? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign In</Text></Text>
        </View>

      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegistrationScreen;
