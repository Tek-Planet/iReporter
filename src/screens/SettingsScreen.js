import React, { Component } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import axios from 'axios'
export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }


  componentDidMount(){
   const reqs = {
      "api_key": "pyvausnZHgj2ZICw5vuTwmTAsTFnwmp+dNcgeOpTQueQQIyEakKwxloayJ5j0MQyg+XMjuSjQt05fPYsiGK9PA",
      "service_code": 875970000,
      "lat": 3.333333,
      "lon": 6.333333,
      "address": "port",
      "email": "sample string 6",
      "description": "Road Blockage leads to holdup",
      "first_name": "sample string 8",
      "last_name": "sample string 9",
      "phone": "sample string 10",
      "media_url": "https://phoenix311openapi.azurewebsites.net/api/Request",
      "attribute": {
        "sample string 1": {},
        "sample string 3": {}
      },
      "EntityPluralName": "incidents"
    }
    axios
    .post('https://phoenix311openapi.azurewebsites.net/api/Request', reqs)
    .then((res) => {
     console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });

    console.log(reqs.api_key)
  }
  
  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput 
             multiline = {true}
             numberOfLines = {5}
                    placeholder="Description"
                    placeholderTextColor="#666666" 
                    autoCapitalize="none"
                    style={styles.input}       
                />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  inputContainer: {
    margin: 5,
    borderRadius:5,
    borderLeftWidth: 4,
    borderRightWidth: 4,
  
  },
  input: {
    textAlignVertical: 'top',
    backgroundColor: '#ccc',
    paddingLeft: 15,
    paddingRight: 15
  }
})
