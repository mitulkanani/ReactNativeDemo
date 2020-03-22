// Global imports
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

// File imports
import styles from './styles';
import COLORS from '../../../Helper/Colors';

// Component import
import CustomTextField from '@TextField';
import CustomButton from '@Button';
import { imgLogo, imgInvisible, imgVisible } from '../../../Helper/Constants';
import {
  setLogiCredential,
  resetAuthDetails,
  loginUser,
  setLoginUser
} from '../../../Store/Actions';


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      passwordVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.successlogin)
    if (this.props.successlogin != nextProps.successlogin) {
      if (nextProps.loggedinUser) {
        this.props.setLoginUser(nextProps.successlogin)
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'BottomTabBar' },
            ]
          })
        );
      } else {
        alert('Email password not matched')
      }
    }
  }

  render() {
    return this.renderMainView()
  }

  /*
  .##....##....###....##.....##.####..######......###....########.####..#######..##....##..######.
  .###...##...##.##...##.....##..##..##....##....##.##......##.....##..##.....##.###...##.##....##
  .####..##..##...##..##.....##..##..##.........##...##.....##.....##..##.....##.####..##.##......
  .##.##.##.##.....##.##.....##..##..##...####.##.....##....##.....##..##.....##.##.##.##..######.
  .##..####.#########..##...##...##..##....##..#########....##.....##..##.....##.##..####.......##
  .##...###.##.....##...##.##....##..##....##..##.....##....##.....##..##.....##.##...###.##....##
  .##....##.##.....##....###....####..######...##.....##....##....####..#######..##....##..######.
  */

  _loginButtonPressed = () => {
    this.props.loginUser()
  }

  _signUpButtonPressed = () => {
    this.props.navigation.navigate('Register')
  }

  /*
  .##........#######...######...####..######...######.
  .##.......##.....##.##....##...##..##....##.##....##
  .##.......##.....##.##.........##..##.......##......
  .##.......##.....##.##...####..##..##........######.
  .##.......##.....##.##....##...##..##.............##
  .##.......##.....##.##....##...##..##....##.##....##
  .########..#######...######...####..######...######.
  */

  _onChangeTextEmail = (text) => {
    this.props.setLogiCredential({ email: text })
  }

  _onChangeTextPassword = (text) => {
    this.props.setLogiCredential({ password: text })
  }

  _onPressShowPassword = () => {
    this.setState(prevState => {
      return {
        passwordVisible: !prevState.passwordVisible
      }
    })
  }

  /*
  ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
  .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
  .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
  .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
  ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
  */

  renderMainView = () => {
    const { showErrorModal, message } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: COLORS.WHITE }}
          behavior={Platform.OS === 'ios' && 'padding'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View>
                {this.renderHeaderImage()}
                {this.renderLoginTextFiled()}
                {this.renderPasswordTextFiled()}
                {this.renderSigninButtonView()}
              </View>
              {this.renderBottomView()}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }

  renderHeaderImage = () => {
    return (
      <View style={{ marginHorizontal: 0, alignItems: 'center', marginTop: 80 }}>
        <Image source={imgLogo} style={{ width: 120, height: 120 }} />
        <Text style={styles.welcomeText}>Login Now!</Text>
        <Text style={{ fontSize: 13, color: COLORS.LIGHT_GRAY, marginTop: 8 }}>
          Please Login to continue using our app!
        </Text>
      </View>
    )
  }

  renderLoginTextFiled = () => {
    const { email } = this.props
    return (
      <CustomTextField
        value={email}
        onChangeText={this._onChangeTextEmail}
        placeholder="Email"
        keyboardType='email-address'
        containerStyle={{ marginTop: 25, marginHorizontal: 20 }}
      />
    )
  }

  renderPasswordTextFiled = () => {
    const { password, passwordVisible } = this.props
    return (
      <CustomTextField
        value={password}
        onChangeText={this._onChangeTextPassword}
        placeholder="Password"
        blurOnSubmit={false}
        secureTextEntry={passwordVisible ? false : true}
        rightImg={passwordVisible ? imgVisible : imgInvisible}
        onPressRight={this._onPressShowPassword}
        containerStyle={{ marginTop: 10, marginHorizontal: 20 }}
      />
    )
  }

  renderSigninButtonView = () => {
    return (
      <View style={styles.signinButtonContainer}>
        <CustomButton
          title='SIGN IN'
          onPress={this._loginButtonPressed}
          textColor={COLORS.WHITE}
          btnStyle={styles.btnStyle} />
      </View>
    )
  }

  renderBottomView = () => {
    return (
      <View style={styles.bottomView}>
        <Text style={[styles.forgotPasswordText, { color: COLORS.LIGHT_GRAY }]}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={this._signUpButtonPressed}>
          <Text style={[styles.forgotPasswordText, { fontSize: 18, marginTop: 8 }]}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.AuthReducer,
    ...state.PersistReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogiCredential: (detail) => dispatch(setLogiCredential(detail)),
    resetAuthDetails: () => dispatch(resetAuthDetails()),
    loginUser: () => dispatch(loginUser()),
    registerUser: () => dispatch(registerUser()),
    setLoginUser: (user) => dispatch(setLoginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 
