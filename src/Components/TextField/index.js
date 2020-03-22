// Global imports
import React, { Component } from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

// File imports
import COLORS from '../../Helper/Colors';

class CustomTextField extends Component {

  _onPressRghtImage = () => {
    if (this.props.onPressRight) {
      this.props.onPressRight()
    }
  }

  render() {
    const {
      containerStyle,
      placeholderColor,
      autoCapitalize,
      inputStyle,
      rightImg,
      leftImg,
      onPressRight
    } = this.props;
    return (
      <View style={[styles.containerView, containerStyle]}>
        <View style={styles.view}>
          {leftImg &&
            <Image
              resizeMode='contain'
              source={leftImg}
              style={styles.leftIcon}
            />}
          <TextInput
            selectionColor={COLORS.APP_THEME}
            placeholderTextColor={placeholderColor ? placeholderColor : COLORS.LIGHT_GRAY}
            autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
            {...this.props}
            style={[styles.textFieldStyle, inputStyle]}
          />
          {rightImg &&
            <TouchableOpacity onPress={this._onPressRghtImage}>
              <Image
                resizeMode='contain'
                source={rightImg}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}

export default CustomTextField


const styles = StyleSheet.create({
  containerView: {
    paddingVertical: 5
  },
  textFieldStyle: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    padding: 15,
    color: COLORS.BLACK,
  },
  view: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 6,
    borderWidth: 1.0,
    borderColor: COLORS.BORDER,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 8,
  },
  leftIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 5,
  },
});