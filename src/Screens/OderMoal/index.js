import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

const mapState = ({ store }) => ({
  oderDetails: store.oderDetails,
});

const OderModal = ({ navigation }) => {
  const dispatch = useDispatch();
  const { oderDetails } = useSelector(mapState);

  return (
    <View>
      <Text>This is OderModal !</Text>
      {oderDetails.map((item) => {
        return (
          <View
            key={item.productId}
            style={{
              position: 'relative',
              width: '100%',
              minWidth: '100%',
              backgroundColor: '#f7f8f9',
              padding: 6,
              marginBottom: 20,
              // justifyContent: 'space-evenly',

              // flexDirection: 'row',
            }}
          >
            <Text
              style={{
                width: '6%',
                position: 'absolute',
                top: 6,
                left: 6,
                backgroundColor: 'red',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              {' '}
              {item.qty}{' '}
            </Text>
            <Text
              style={{
                width: '74%',
                maxWidth: '74%',
                marginLeft: '8%',
                textAlign: 'auto',
                // marginTop: 0,
                paddingLeft: 0,

                // flex: 1,
                // flexDirection: 'column',
                // position: 'absolute',
                // left: '11%',
                // flexWrap: 'wrap',
                backgroundColor: 'pink',
              }}
            >
              {' '}
              {item.title}{' '}
            </Text>
            <Text
              style={{
                width: '17%',
                position: 'absolute',
                top: 6,
                right: 6,
                textAlign: 'center',
                backgroundColor: 'yellow',
              }}
            >
              {' '}
              {(item.price * item.qty).toFixed(2)}€{' '}
            </Text>
            {/* <Text> {item.qty} </Text> */}
          </View>
        );
      })}
    </View>
  );
};

export default OderModal;
