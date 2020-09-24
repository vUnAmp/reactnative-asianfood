import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import slide4 from '../../../assets/slide4.jpg';
// import styles from "../../Screens/StackNavigator/styles";

const data = [slide1, slide2, slide3, slide4];
const { width } = Dimensions.get('window');
const height = width * 0.5;

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  wrapImage: {
    width,
    backgroundColor: '#f2f2f2',
    zIndex: 2030,
  },
  itemShows: {
    width: width - 18,
    height: height - 16,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 8,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    // opacity: 0.4,

    shadowOffset: {
      width: 20,
      height: 40,
    },
    shadowOpacity: 0.6,
    shadowRadius: 24,
    shadowColor: 'red',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  paginText: {
    color: 'white',
    margin: 3,
    fontSize: 6,
  },
  paginActiveText: {
    color: '#888',
    margin: 3,
    fontSize: 6,
  },
  link: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    fontSize: 20,
    color: '#ddd',
    fontWeight: 'bold',
    zIndex: 2020,
  },
});

const Carousel = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const onSlideScroll = ({ nativeEvent }) => {
    const x = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    if (active !== Math.ceil(x)) setActive(Math.ceil(x));
  };
  const testFunction = (x) => {
    console.log(x);
  };
  const onPressLink = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        horizontal
        onScroll={onSlideScroll}
        style={{ width, height }}
        onStartShouldSetResponder={testFunction}
      >
        <View style={styles.wrapImage}>
          <Text onPress={onPressLink} style={styles.link}>
            Summer Roll
          </Text>
          <Image
            source={{
              uri:
                'https://wolt-menu-images-cdn.wolt.com/menu-images/5f2a8e890f423d91523fb1c7/682d858c-d73a-11ea-a937-5a12c736cee0_sons_15.jpeg',
            }}
            style={styles.itemShows}
          />
        </View>
        <View style={styles.wrapImage}>
          <Image
            source={{
              uri:
                'https://wolt-menu-images-cdn.wolt.com/menu-images/5f2a8e890f423d91523fb1c7/cd797a18-d735-11ea-bd0a-86919a6403c4_sons_3.jpeg',
            }}
            style={styles.itemShows}
          />
        </View>
        <View style={styles.wrapImage}>
          <Image
            source={{
              uri:
                'https://wolt-menu-images-cdn.wolt.com/menu-images/5f2a8e890f423d91523fb1c7/682d858c-d73a-11ea-a937-5a12c736cee0_sons_15.jpeg',
            }}
            style={styles.itemShows}
          />
        </View>
        <View style={styles.wrapImage}>
          <Image
            source={{
              uri:
                'https://wolt-menu-images-cdn.wolt.com/menu-images/5f2a8e890f423d91523fb1c7/682d858c-d73a-11ea-a937-5a12c736cee0_sons_15.jpeg',
            }}
            style={styles.itemShows}
          />
        </View>
      </ScrollView>
      <View style={styles.pagination}>
        <Text
          key={1}
          style={active === 0 ? styles.paginActiveText : styles.paginText}
        >
          ⬤{' '}
        </Text>
        <Text
          key={2}
          style={active === 1 ? styles.paginActiveText : styles.paginText}
        >
          ⬤{' '}
        </Text>
        <Text
          key={3}
          style={active === 2 ? styles.paginActiveText : styles.paginText}
        >
          ⬤{' '}
        </Text>
        <Text
          key={4}
          style={active >= 3 ? styles.paginActiveText : styles.paginText}
        >
          ⬤{' '}
        </Text>
      </View>
    </View>
  );
};
export default Carousel;
