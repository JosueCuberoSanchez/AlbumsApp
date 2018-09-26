import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// HTTP Requests
import axios from 'axios';

// Mapping
//import { map } from 'ramda';

class AlbumList extends Component {

  state = { loading: true, albums: '' };

  async componentDidMount() {
    try {
      const apiResponse = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      const albums = apiResponse.data;
      this.setState({ loading: false, albums });
    } catch (error) {
        console.log(`There has been a problem with your fetch operation: ${error.message}`);
        throw error;
    }
  }

  render() {
    const { viewStyle } = styles;
    const { loading } = this.state;

    return (
      <View style={viewStyle} >
        {
          loading
          ? <Text>Loading...</Text>
          : <Text>Loaded!</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {

  }
});

export default AlbumList;
