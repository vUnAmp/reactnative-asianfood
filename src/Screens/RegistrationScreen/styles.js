import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dddd',
  },
  logo: {
    flex: 1,
    height: 120,
    width: 120,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    // color: 'black',
    // placeholderTextColor: '#ddd',

    height: 48,
    paddingLeft: 16,
    overflow: 'hidden',
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 20,
    height: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009de0',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#009de0',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
