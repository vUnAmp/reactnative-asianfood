import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../../redux/Store/store.action';

import oderStyles from './oderStyles';

const mapState = ({ store }) => ({
  oderDetails: store.oderDetails,
});

const OderModal = ({ data }) => {
  const dispatch = useDispatch();
  const { oderDetails } = useSelector(mapState);
  const plusItem = ({ title, description, productId, price, qty }) => {
    oderDetails.find((item) => item.productId === productId).qty += 1;
    dispatch(addProduct(oderDetails));
    console.log('hey plus');
  };
  const minusItem = ({ title, description, productId, price, qty }) => {
    oderDetails.find((item) => item.productId === productId).qty -= 1;
    dispatch(addProduct(oderDetails));
  };
  return (
    <ScrollView>
      <View
        flex={1}
        onStartShouldSetResponder={() => true}
        style={{
          width: '100%',
          backgroundColor: '#fff',
          // position: 'absolute',
          // bottom: 100,
          minHeight: '100%',
          bottom: 0,
          paddingBottom: 60,
          paddingTop: 6,
        }}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            paddingBottom: 6,
            paddingHorizontal: 10,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              color: '#009de0',
              fontSize: 16,
            }}
          >
            Your Oder Details:
          </Text>
          {/* <TouchableHighlight
            style={{
              height: 46,
              width: 46,
              borderRadius: 50,
              backgroundColor: 'yellow',
              marginRight: -10,
              
            }}
          >
            <Button title='&times;' onPress={() => data()} color='#000' />
          </TouchableHighlight> */}
          <Text
            onPress={() => data()}
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              // backgroundColor: 'red',
              padding: 10,
              marginRight: -6,
              marginTop: -6,
            }}
          >
            &times;
          </Text>
        </View>
        {oderDetails.map(({ title, description, productId, price, qty }) => {
          return (
            <View style={oderStyles.wrapProduct} key={productId}>
              <Text style={oderStyles.title}>{title}</Text>
              {/* <Text style={oderStyles.description}>{description}</Text> */}
              {/* <View style={mainStyles.wrapPrice}> */}
              <Text style={oderStyles.price}>{price.toFixed(2)} € </Text>
              {/* <View style={oderStyles.addItem}>
                <Button style={oderStyles.button} title='+' />
              </View>
              <View style={oderStyles.minusItem}>
                <Button style={oderStyles.button} title='-' />
              
              </View> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: -12,
                }}
              >
                <Text
                  style={oderStyles.setting}
                  onPress={() =>
                    minusItem({ title, description, productId, price, qty })
                  }
                >
                  -
                </Text>
                <Text
                  style={oderStyles.setting}
                  onPress={() =>
                    plusItem({ title, description, productId, price, qty })
                  }
                >
                  +
                </Text>
              </View>

              <Text style={oderStyles.qty}> {qty} </Text>

              {/* </View> */}
            </View>
          );
        })}
        <View style={oderStyles.sumRow}>
          <Text>SubTotal</Text>
          <Text>
            {' '}
            {oderDetails
              .map((item) => item.qty * item.price)
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
            €{' '}
          </Text>
        </View>
        <View style={oderStyles.sumRow}>
          <Text>Delivery Costs</Text>
          <Text style={{ fontWeight: 'bold', color: '#fd4900' }}>FREE </Text>
        </View>
        <View style={oderStyles.totalPay}>
          <Text>Total</Text>
          <Text>
            {' '}
            {oderDetails
              .map((item) => item.qty * item.price)
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
            €{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OderModal;
