import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ text }) => {
    const { viewStyle, textStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8', //needed for shadow
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#000'
  }
});

export default Header;
