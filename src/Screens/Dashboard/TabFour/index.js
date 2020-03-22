import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import {
  setLoginUser
} from '../../../Store/Actions';

import styles from './styles';

class TabFour extends Component {

  _onPressLogout = () => {
    this.props.setLoginUser(undefined)
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Login' },
        ]
      })
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <Button
          title='LogOut'
          onPress={this._onPressLogout}
        />
      </View>
    );
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
    setLoginUser: (user) => dispatch(setLoginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabFour);
