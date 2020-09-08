import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PostRoute from './PostRoutes'

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <Text>Hey post man</Text>
    );
  }
}
