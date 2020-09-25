import React, { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import oderStyles from './oderStyles';

const mapState = ({ store }) => ({
  oderDetails: store.oderDetails,
});

const OderModal = ({ openModal }) => {
  const dispatch = useDispatch();
  const { oderDetails } = useSelector(mapState);

  return (
    <ScrollView
    // style={{
    //   width: '100%',
    //   backgroundColor: '#fff',
    //   position: 'absolute',
    //   bottom: 100,
    // }}
    >
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
          paddingVertical: 60,
        }}
      >
        {/* <Text>This is OderModal !</Text> */}
        {oderDetails.map(({ title, description, productId, price, qty }) => {
          return (
            <View style={oderStyles.wrapProduct} key={productId}>
              <Text style={oderStyles.title}>{title}</Text>
              {/* <Text style={oderStyles.description}>{description}</Text> */}
              {/* <View style={mainStyles.wrapPrice}> */}
              <Text style={oderStyles.price}>{price.toFixed(2)} € </Text>
              <View style={oderStyles.addItem}>
                <Button style={oderStyles.button} title='+' />
              </View>
              <View style={oderStyles.minusItem}>
                <Button style={oderStyles.button} title='-' />
              </View>

              <Text style={oderStyles.qty}> {qty} </Text>

              {/* </View> */}
            </View>
          );
        })}
        <View>
          <Text>SubTotal</Text>
          <Text>
            {' '}
            {oderDetails
              .map((item) => item.qty * item.price)
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
            E{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OderModal;
