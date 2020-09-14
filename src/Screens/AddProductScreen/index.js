import React, { useState } from 'react'
import { View, TextInput, Text, Image, TouchableOpacity, Button } from 'react-native'
import { Picker } from '@react-native-community/picker'

import styles from '../../Styles/mainStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from '../../firebase/config'

const AddProductScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [iamgeName, setImageName] = useState('')
    const [category, setCategory] = useState('Beliebte Gerichte')

    const onAddProductPress = () => {
        firebase.firestore().collection('products').add({ title, description, price, iamgeName, category })
            .then((docRef) => {
                navigation.push('AddProductScreen')
            })
            .catch(error => {
                console.log(error)
            })


    }

    return (
        <View style={styles.container} >
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps='always'
            >
                <TextInput style={styles.input}
                    placeholder='Title of product'
                    placeholderTextColor='#aaa'
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                />
                <TextInput style={styles.input}
                    placeholder='Description of product'
                    placeholderTextColor='#aaa'
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                />
                <TextInput style={styles.input}
                    placeholder='Price of product'
                    placeholderTextColor='#aaa'
                    onChangeText={(text) => setPrice(text)}
                    value={price}
                />
                <TextInput style={styles.input}
                    placeholder='ImageName of product'
                    placeholderTextColor='#aaa'
                    onChangeText={(text) => setImageName(text)}
                    value={iamgeName}
                />
                <Picker
                    selectedValue={category}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                >

                    <Picker.Item label='Beliebte Gerichte' value='Beliebte Gerichte' />
                    <Picker.Item label='Suppen' value='Suppen' />
                    <Picker.Item label='Salat' value='Salat' />
                    <Picker.Item label='Vorspeisen' value='Vorspeisen' />
                    <Picker.Item label='Gerichte mit Reis und Nudeln' value='Gerichte mit Reis und Nudeln' />
                    <Picker.Item label='Gerichte mit Ente' value='Gerichte mit Ente' />
                    <Picker.Item label='Gerichte mit Schweinefleisch' value='Gerichte mit Schweinefleisch' />
                    <Picker.Item label='Gerichte mit Hühnerfleisch' value='Gerichte mit Hühnerfleisch' />
                </Picker>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onAddProductPress}
                >
                    <Text style={styles.buttonTitle}   >Submit</Text>
                </TouchableOpacity>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default AddProductScreen
