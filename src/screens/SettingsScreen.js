import React, { Component } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
