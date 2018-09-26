/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';

// Components
import Header from './src/components/header/';
import AlbumList from './src/components/album-list/';

// Helpers
import * as Constants from './src/helpers/constants';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header text={Constants.MAIN_HEADER_TEXT} />
        <AlbumList />
      </View>
    );
  }
}
