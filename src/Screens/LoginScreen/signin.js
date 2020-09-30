import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-elements';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import firebase from '../../firebase/config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// REDUX stuff
import { userSignInWithEmailandPassword } from '../../redux/User/user.action';
import { useSelector, useDispatch } from 'react-redux';

//Disable warning setting a timer
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);
export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('RegistrationScreen');
  };

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(userSignInWithEmailandPassword());
        const uid = res.user.uid;
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .get()
          .then((docs) => {
            if (!docs.exists) {
              console.log('User is not exist');
              return;
            }
            const user = docs.data();
            navigation.navigate('HomeScreen', { user });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
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
          onPress={onLoginPress}
          title='LOGIN'
          buttonColor='#039BE5'
        />
      </View>
      <View
        style={{
          marginHorizontal: 25,
        }}
      >
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => {
            navigation.navigate('RegistrationScreen');
          }}
          titleStyle={{
            color: '#F57C00',
          }}
          type='clear'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  buttonContainer: {
    margin: 25,
  },
});
