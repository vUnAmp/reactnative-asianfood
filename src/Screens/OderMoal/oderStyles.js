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
    width: '70%',
    marginLeft: '7%',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 43,
  },
  description: {},
  price: {
    width: '14%',
    position: 'absolute',
    top: 16,
    right: 6,
    fontSize: 14,
    // fontWeight: 'bold',
  },
  qty: {
    width: '6%',
    position: 'absolute',
    top: 16,
    left: 6,
    color: '#009de0',
    fontSize: 14,
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
});
