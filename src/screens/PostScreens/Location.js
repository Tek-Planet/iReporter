import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Placesearch from 'react-native-placesearch'

const LocationScreen = ({route, navigation}) => {
  //AIzaSyCu622mFmNfcDF8JJY-Be2pdrmJ4k1rcRA
  const {request} = route.params;
  const goNext = () => {
    request.location = "Lagos Nigeria"
    navigation.navigate('Category', {
      request: request,
  })
  }
    return (
      <View style={{flex:1}}>
          <View style={{padding:15, flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity onPress={ () =>  navigation.goBack()}>
              <View  style={{flexDirection: 'row'}}>
              <Icon name="chevron-back-outline" color={'#2CB7EA'} 
              size={26} />
              <Text  
              style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
                Back
              </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={goNext}>
              <Text  
              style={{color: '#2CB7EA',  fontWeight:'bold', margin:2, fontSize:16}}>
              Next
              </Text>
              </TouchableOpacity> 
        </View>
        
        <View style={{flex:1}}>
        <Text style={{fontSize:25, marginStart:10}}>Location</Text>
        {/* <Placesearch 
            apikey="AIzaSyCu622mFmNfcDF8JJY-Be2pdrmJ4k1rcRA" // required *
            SelectedAddress={(data)=>console.log(data)} // required *
            // country ="country code" //optional
            // InputContainer = {{'your style goes here'}} //optional
            // MainContainer = {{'your style goes here'}} //optional
            // ListStyle = {{'your style goes here'}} //optional
            // ListTextStyle = {{'your style goes here'}} //optional
            // ListIconStyle = {{'your style goes here'}} //optional
            // ImgStyle = {{'your style goes here'}} //optional
            // Img = {{'your style goes here'}} //optional
            // textInput = {{'your style goes here'}} //optional
            // placeHolder = {{'type any textInput placeholder as you like'}} //optional
            /> */}
         <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            listViewDisplayed={false}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyDfVoSZvzd8hi_hJNfi4N01MbxBPzPpxjY',
              language: 'en',
              
            }}
          />
       </View>
      </View>
    );
  }

export default LocationScreen

