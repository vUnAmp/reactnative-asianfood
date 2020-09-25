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

import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/Store/store.action';

import Modal from 'react-native-modal';

import Carousel from '../../components/Carousel';
import firebase from '../../firebase/config';

import mainStyles from '../../Styles/mainStyles';
import OderModal from '../OderMoal';

const mapState = ({ store }) => ({
  oderDetails: store.oderDetails,
});

const HomeScreen = ({ navigation }) => {
  // console.log(Dimensions.get('window'));

  const dispatch = useDispatch();
  const { oderDetails } = useSelector(mapState);

  const onSignUpPress = () => {
    navigation.navigate('RegistrationScreen');
  };
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalPay, setTotalPay] = useState(0);
  const Product = ({ title, description, price, productId }) => {
    const addItem = () => {
      setTotalPay(totalPay + price);
      const itemExits = oderDetails.find(
        (item) => item.productId === productId
      );
      if (!itemExits)
        oderDetails.push({ title, description, price, productId, qty });
      else itemExits.qty += 1;

      dispatch(addProduct(oderDetails));
      console.log(oderDetails);
    };
    return (
      <View style={mainStyles.wrapProduct}>
        <Text style={mainStyles.title}>{title}</Text>
        <Text style={mainStyles.description}>{description}</Text>
        {/* <View style={mainStyles.wrapPrice}> */}
        <Text style={mainStyles.price}>{price.toFixed(2)} € </Text>
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
      productId={item.uid}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <View style={{ marginTop: 50 }}>
            <Carousel navigation={navigation} />

            <Modal
              // propagateSwipe={true}
              isVisible={openModal}
              //  How much will Closed MODAL
              swipeThreshold={350}
              onSwipeComplete={() => {
                setOpenModal(false);
              }}
              backdropOpacity={0.4}
              swipeDirection={['down']}
              style={{
                flex: 1,
                width: '100%',
                // backgroundColor: 'white',
                alignSelf: 'center',
                // bottom: 0,
                // position: 'absolute',
                // top: 30,
                // margin: 0,
                marginTop: 60,
                marginBottom: 0,
              }}
            >
              {/* <View
                // flex={1}
                // onStartShouldSetResponder={() => true}
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  height: '90%',
                  width: '100%',
                  backgroundColor: 'white',
                  // position: 'absolute',
                  // bottom: 0,
                  borderRadius: 8,
                }}
              > */}
              {/* <Text>Hello ! I am a Modal hee</Text>

                <Button title='x' onPress={() => setOpenModal(!openModal)} /> */}

              <OderModal />
              {/* </View> */}
            </Modal>

            <View style={styles.mainContent}>
              <Text style={styles.brandTitle}>
                Bamboo Bistro Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laboriosam inventore perferendis facere quod veritatis ut
                commodi, quae fuga porro in natus tempora itaque consequuntur
                fugiat cumque explicabo nostrum. Illo, hic.
              </Text>
              <Text style={styles.brandDescription}>
                Healthy and fresh food{' '}
              </Text>
            </View>
          </View>
        }
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {totalPay > 0 ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            //  add PRODUCT with uid in to firestore
            // const ref = firebase.firestore().collection('products').doc();
            // console.log(ref.id);
            // firebase
            //   .firestore()
            //   .collection('products')
            //   .doc(ref.id)
            //   .set({
            //     hello: 'Hello',
            //     uid: ref.id,
            //   })
            //   .then(() => console.log('successfully'))
            //   .catch((error) => console.log(error));
            setOpenModal(!openModal);
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            borderTopColor: '#ddd',
            borderTopWidth: 1,
            // borderRadius: 6,
            elevation: 8,
          }}
        >
          <View
            style={{
              width: '96%',
              height: 46,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'blue',
              backgroundColor: '#03A9F4',
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: 'white',
              }}
            >
              {' '}
              totalPay : {totalPay.toFixed(2)}€{' '}
            </Text>
          </View>
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
