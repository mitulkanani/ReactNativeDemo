import { StyleSheet } from 'react-native'
import COLORS from '../../../Helper/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  welcomeText: {
    marginTop: 10,
    color: COLORS.BLACK,
    fontSize: 28,
    fontWeight: '600'
  },
  signinButtonContainer: {
    marginTop: 50,
    marginHorizontal: 20
  },
  forgotPasswordText: {
    fontSize: 16
  },
  forgotPasswordBtn: {
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  btnStyle: {
    paddingHorizontal: 30,
  },
  bottomView: {
    marginHorizontal: 0,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
})