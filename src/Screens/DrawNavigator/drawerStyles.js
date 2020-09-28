import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f8f5f2',
  },
  brand: {
    // backgroundColor: '#009de0',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 20,
    color: '#f05123',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  description: {
    color: '#009de0',
  },
  close: {
    position: 'absolute',
    top: 30,
    right: 30,
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
