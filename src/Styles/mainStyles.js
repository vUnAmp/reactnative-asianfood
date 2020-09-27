import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    flex: 1,
    height: 120,
    width: 120,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  wrapProduct: {
    position: 'relative',
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 6,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F1111',
    width: '80%',
  },
  description: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#565959',
  },
  addItem: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#009de0',
    fontSize: 30,
    width: '10%',
    maxWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // backgroundColor: '#f0c14b'
  },
  wrapPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fd4900',
    marginTop: 10,
  },
  oderOptions: {
    // height: 0,
  },
  cartSum: {
    position: 'relative',
    bottom: 0,
    zIndex: 2060,
  },
  // Modal test
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
});
