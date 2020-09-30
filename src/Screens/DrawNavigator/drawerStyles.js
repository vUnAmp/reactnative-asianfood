import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f8f5f2',
  },
  brand: {
    // backgroundColor: '#009de0',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 16,
    // color: '#f05123',
    color: '#009de0',
    fontWeight: '500',
    // textAlign: 'center',
    // paddingBottom: 10,
  },
  description: {
    // color: '#009de0',
    fontSize: 14,
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 30,
  },
  userHasLogin: {
    width: '100%',
    backgroundColor: '#ff8000',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: 16,
    alignSelf: 'center',
    // paddingLeft: 20,
  },
  fullName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  accountDetails: {
    textAlign: 'left',
    color: '#fff',
    textDecorationLine: 'underline',
  },
  userSection: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    padding: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
