import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import firebase from '../../firebase/config'
import { Logo } from '../../../assets/favicon.png'

const ImageScreen = ({ navigation }) => {
    const [imageName, setImageName] = useState('buncha')
    const [uri, setUri] = useState(Logo)
    let imageRef = firebase.storage().ref().child('buncha.png')
    // console.log(imageRef)
    imageRef.getDownloadURL().then((url) => {
        setUri(url)
    }).catch(error => {
        console.log(error)
    })

    return (
        <View>
            <Text>Hello from Image</Text>
            <Image style={{ width: 50, height: 50 }} source={{ uri: uri }} />
        </View>
    )
}

export default ImageScreen
