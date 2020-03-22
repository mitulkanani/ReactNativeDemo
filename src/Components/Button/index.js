// Global imports
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native';

// File imports
import COLORS from '../../Helper/Colors';

class CustomButton extends Component {
  render() {
    const {
      title,
      containerStyle,
      onPress,
      leftImg,
      rightImg,
      rightImageStyle,
      leftImageStyle,
      titleStyle
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.btnStyle, containerStyle]}
        onPress={onPress}>
        {leftImg &&
          <Image
            resizeMode='contain'
            source={leftImg}
            style={[styles.leftIcon, leftImageStyle]}
          />}
        <Text style={[styles.text, titleStyle]}>
          {title}
        </Text>
        {rightImg &&
          <Image
            resizeMode='contain'
            source={rightImg}
            style={[styles.rightIcon, rightImageStyle]}
          />}
      </TouchableOpacity>
    )
  }
}

export default CustomButton

const styles = StyleSheet.create({
  btnStyle: {
    height: 50,
    borderRadius: 6,
    backgroundColor: COLORS.APP_THEME,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: COLORS.WHITE
  },
  rightIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginLeft: 10,
  },
  leftIcon: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    marginRight: 10,
  },
});