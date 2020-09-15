import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests
    };
  }
  
  componentDidMount(){
     axios
    .get('https://phoenix311openapi.azurewebsites.net/api/Request?start_date=2020-09-15T00:00:00Z')
    .then(res => {
      this.setState({
        requests:res.data.media_details.sizes.full.source_url,
        isLoading:true
      })})
      .catch(err => {
        console.log(err)
      })
  
  }
  render() {
    return (
      <View>
        <Text> MessageScreen </Text>
      </View>
    );
  }
}
