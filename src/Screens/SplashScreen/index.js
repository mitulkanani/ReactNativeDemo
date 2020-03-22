import React, { Component } from 'react';
import { SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

import styles from './styles';
import Colors from '../../Helper/Colors';
import { imgLogo } from '../../Helper/Constants';

class Splashscreen extends Component {

  componentDidMount() {
    if (this.props.loginUser) {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'BottomTabBar' },
          ]
        })
      );
    } else {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Login' },
          ]
        })
      );
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={imgLogo} style={styles.logo} />
        <ActivityIndicator style={styles.loader} size='large' color={Colors.APP_THEME} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    ...state.PersistReducer
  };
};

export default connect(mapStateToProps, null)(Splashscreen);
