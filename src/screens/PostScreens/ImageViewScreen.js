import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationScreen = ({route, navigation}) => {
  
  const gotoLocation = () => {
    navigation.navigate('Location', {
      request: request,
      image: image,
  })
  }
  
  const {request} = route.params;
  const {image} = route.params;
  
    return (  
      <View style={{flex:1}}> 
     
       <View style={{padding:15, flexDirection: 'row', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={ () =>  navigation.goBack()}>
        <View  style={{flexDirection: 'row'}}>
          <Icon name="chevron-back-outline" color={'#2CB7EA'} 
          size={26} />
          <Text  
          style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
          New Request
          </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={gotoLocation}>
          <Text  
          style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
          Next
          </Text>
          </TouchableOpacity>
          
        </View>
        <View >
        <Image
            source={{
              uri: image.path,
            }}
            style={{height: 400, width: '98%', borderRadius:10, alignSelf:'center'}}
            />
       
        </View>
      </View>
    );
  }

export default LocationScreen

