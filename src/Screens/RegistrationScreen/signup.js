import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-elements';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
// REDUX Stuff
import { userSignupWithEmailandPassword } from '../../redux/User/user.action';
import { useSelector, useDispatch } from 'react-redux';

import firebase from '../../firebase/config';
//Disable warning setting a timer
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

const RegistrationScreen = ({ navigation, ...props }) => {
  const dispatch = useDispatch();

  const [fullName, setFullname] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('LoginScreen');
  };
  const onRegisterPress = () => {
    if (password.length > 5 && fullName.length > 5 && password.length > 5) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          const uid = res.user.uid;
          const data = {
            id: uid,
            email,
            fullName,
          };
          dispatch(userSignupWithEmailandPassword());
          const usersRef = firebase.firestore().collection('users');
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              navigation.navigate('HomeScreen', { user: data });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // if (password !== confirmPassword) {
    //   alert('confirm password not match');
    // }
    else {
      alert('Check your infomation');
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps='always'
      >
        {/* <SafeAreaView style={styles.container}> */}
        <FormInput
          name='fullname'
          value={fullName}
          placeholder='Enter full name'
          autoCapitalize='none'
          onChangeText={(text) => setFullname(text)}
          iconName='ios-contact'
          iconColor='#2C384A'
        />
        <FormInput
          name='email'
          value={email}
          placeholder='Enter email'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
          iconName='ios-mail'
          iconColor='#2C384A'
        />
        <FormInput
          name='password'
          value={password}
          placeholder='Enter password'
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          iconName='ios-lock'
          iconColor='#2C384A'
        />
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType='outline'
            onPress={onRegisterPress}
            title='SUBMIT'
            buttonColor='#039BE5'
          />
        </View>
        <View
          style={{
            marginHorizontal: 25,
          }}
        >
          <Button
            title='Already have an account? Sign In'
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            titleStyle={{
              color: '#F57C00',
            }}
            type='clear'
          />
        </View>
        {/* </SafeAreaView> */}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    margin: 25,
  },
});

export default RegistrationScreen;
