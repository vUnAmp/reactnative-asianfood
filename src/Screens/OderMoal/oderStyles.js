import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  wrapProduct: {
    position: 'relative',

    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    // marginVertical: 3,
    // marginHorizontal: 3,
    paddingVertical: 16,
    paddingHorizontal: 8,
    // backgroundColor: 'pink',
  },
  title: {
    width: '68%',
    marginLeft: '8%',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingLeft: 3,
    // backgroundColor: 'blue',
  },
  description: {},
  price: {
    width: '20%',
    position: 'absolute',
    top: 16,
    right: 11,
    fontSize: 14,
    textAlign: 'right',
    // fontWeight: 'bold',
  },
  qty: {
    width: '10%',
    position: 'absolute',
    top: 16,
    left: 3,
    color: '#fd4900',
    fontSize: 14,
    fontWeight: 'bold',

    // backgroundColor: 'red',
  },
  wrapButton: {
    width: 30,
  },
  addItem: {
    position: 'absolute',
    bottom: 6,
    right: 10,

    width: 36,

    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
  },
  minusItem: {
    position: 'absolute',
    bottom: 6,
    right: 60,
    // color: '#009de0',
    // fontSize: 26,
    width: 36,

    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
  },
  setting: {
    fontWeight: '500',
    fontSize: 18,
    marginRight: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    width: 30,
    height: 30,
    textAlign: 'center',
    // marginBottom: -2,
    // paddingTop: 3,
    color: '#009de0',
  },
  sumRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 8,
  },
  totalPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
});
