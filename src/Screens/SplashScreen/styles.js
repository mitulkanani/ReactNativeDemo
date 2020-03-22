import { StyleSheet } from 'react-native';
import Colors from '../../Helper/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center'
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 80
  },
  logo: {
    height: 120,
    width: 120,
    alignSelf: 'center'
  }
})